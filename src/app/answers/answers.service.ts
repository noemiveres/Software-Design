import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { Answer } from '../types/Answer';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, forkJoin, map, switchMap, tap, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AnswersService {
  private apiUrl = 'http://localhost:8080/answers';

  constructor(private http: HttpClient, private authService: AuthService) { }

  currentIndex = 5;

  showMore() {
    this.currentIndex += 5;
  }

  getMyAnswers(): Observable<Answer[]> {

    return this.http.get<Answer[]>('http://localhost:8080/answers/ofUser/1');
  }

  getAllAnswersToQuestion(questionId: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(`http://localhost:8080/answers/toQuestion/${questionId}`).pipe(
      switchMap(answers => {
        const voteCountObservables: Observable<number>[] = answers.map(answer => this.getVoteCount(answer.id));
        return forkJoin(voteCountObservables).pipe(
          map((voteCounts: number[]) => {
            return answers.sort((a, b) => {
              const voteCountA = voteCounts[answers.indexOf(a)];
              const voteCountB = voteCounts[answers.indexOf(b)];
              return voteCountB - voteCountA;
            });
          })
        );
      })
    );
  }

  getAnswerById(answerId: number): Observable<Answer> {
    return this.http.get<Answer>(`${this.apiUrl}/${answerId}`);
  }

  addAnswer(newAnswer: Answer): Observable<Answer> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authService.getToken()}`
      })
    };

    console.log('Adding answer:', newAnswer);

    return this.http.post<Answer>('http://localhost:8080/answers', newAnswer, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.log('Unauthorized request. Redirecting to login.');
        } else {
          // handle other errors
        }
        return throwError(error);
      })
    );
  }

  updateAnswer(answer: Answer): Observable<Answer> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.put<Answer>(`${this.apiUrl}/${answer.id}`, answer, httpOptions).pipe(
      tap(() => console.log('Answer updated successfully.')),
      catchError((error: any) => {
        console.error('Error updating answer:', error);
        return throwError(error);
      })
    );
  }

  deleteAnswer(answerId: number): Observable<Answer> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authService.getToken()}`
      })
    };

    console.log('Deleting answer:', answerId, `${this.apiUrl}/${answerId}`);
    return this.http.delete<Answer>(`${this.apiUrl}/${answerId}`, httpOptions)
      .pipe(
        tap(() => console.log('Answer deleted successfully. Please Reload the page to see the changes')),
        catchError((error: any) => {
          alert('Answer was already deleted. Please Reload the page to see the changes');
          return throwError(error);
        })
      );
  }

  likeAnswer(userId: number, answerId: number): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/votes/upvote/${userId}/${answerId}`, null);
  }

  dislikeAnswer(userId: number, answerId: number): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/votes/downvote/${userId}/${answerId}`, null);
  }

  getVoteCount(answerId: number): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/votes/content/${answerId}`);
  }
}
