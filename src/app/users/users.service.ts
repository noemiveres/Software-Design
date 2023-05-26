import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../types/User';
import { Question } from '../types/Question';
import { Observable, Subject, catchError, forkJoin, map, of, switchMap, tap, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient,
    private emailService: EmailService,
    private authService: AuthService) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl).pipe(
          switchMap(users => {
            const scoreObservables: Observable<number>[] = users.map(user => this.getScore(user.userId));
            return forkJoin(scoreObservables).pipe(
              map((scores: number[]) => {
                return users.sort((a, b) => {
                  const scoreA = scores[users.indexOf(a)];
                  const scoreB = scores[users.indexOf(b)];
                  return scoreB - scoreA;
                });
              })
            );
          })
        );
      }
      

  getScore(userId: number): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/votes/score/user/${userId}`);
  }

  unbanUser(user: User) {
    if (!user) return;
  
    const updatedUser = { ...user, banned: false };
  
    const emailContent = {
      subject: "Unbanned from StackOverflow",
      msgBody: "You have been unbanned. You can log in again."
    };
  
    this.emailService.sendEmail(updatedUser.email, emailContent.msgBody, emailContent.subject)
      .subscribe(() => {
        this.authService.updateUserInfo(updatedUser)
          .subscribe(
            () => {
              alert(`You updated the user's ban status successfully.`);
            },
            (error) => {
              console.error('Error updating user ban status:', error);
            }
          );
      });
  }
  
}