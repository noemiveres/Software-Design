import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Question } from '../types/Question';
import { Observable, catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private apiUrl = 'http://localhost:8080/questions';

  constructor(private http: HttpClient, private authService: AuthService, 
    private router: Router) { }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl).pipe(
      map(questions => {
        console.log(questions);
        console.log(questions[0].tags);
        return questions.sort((a, b) => {
          const dateA = new Date(a.creationDate);
          const dateB = new Date(b.creationDate);
          return dateB.getTime() - dateA.getTime();
        });
      })
    );
  }

  getMyQuestions(): Observable<Question[]> {
    return this.authService.getCurrentUser().pipe(
      switchMap(user => {
        if (user) {
          return this.http.get<Question[]>(`${this.apiUrl}/ofUser/${user.userId}`);
        } else {
          // Return an empty observable or handle the case when there is no current user
          return of([]);
        }
      })
    );
  }

  getQuestionsByTitle(title: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/search/${title}`).pipe(
      map(questions => {
        return questions.sort((a, b) => {
          const dateA = new Date(a.creationDate);
          const dateB = new Date(b.creationDate);
          return dateB.getTime() - dateA.getTime();
        });
      })
    );
  }

  getQuestionsByAuthor(firstName: string, lastName: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/search/${firstName}/${lastName}`).pipe(
      map(questions => {
        return questions.sort((a, b) => {
          const dateA = new Date(a.creationDate);
          const dateB = new Date(b.creationDate);
          return dateB.getTime() - dateA.getTime();
        });
      })
    );
  }  

  addQuestion(newQuestion: Question): Observable<Question> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authService.getToken()}`
      })
    };

    console.log('Adding question:', newQuestion);
  
    return this.http.post<Question>(this.apiUrl,newQuestion,httpOptions).pipe(
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

  getQuestionById(questionId: number): Observable<Question> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.get<Question>(`${this.apiUrl}/${questionId}`,httpOptions);
  }

  updateQuestion(question: Question): Observable<Question> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.put<Question>(`${this.apiUrl}/${question.id}`, question, httpOptions).pipe(
      tap(() => console.log('Question updated successfully.')),
      catchError((error: any) => {
        console.error('Error updating question:', error);
        return throwError(error);
      })
    );
  }

  deleteQuestion(questionId: number): Observable<Question> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.authService.getToken()}`
      })
    };
    
    console.log('Deleting question:', questionId, `${this.apiUrl}/${questionId}`);
    return this.http.delete<Question>(`${this.apiUrl}/${questionId}`, httpOptions)
    .pipe(
      tap(() => console.log('Question deleted successfully. Please Reload the page to see the changes')),
      catchError((error: any) => {
        alert('Question was already deleted. Please Reload the page to see the changes');
        return throwError(error);
      })
    );
  }

  getQuestionsByTag(tagName: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/ofTag/${tagName}`).pipe(
      map(questions => {
        return questions.sort((a, b) => {
          const dateA = new Date(a.creationDate);
          const dateB = new Date(b.creationDate);
          return dateB.getTime() - dateA.getTime();
        });
      })
    );
  }

  likeQuestion(userId: number, questionId: number): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/votes/upvote/${userId}/${questionId}` , null);
  }

  dislikeQuestion(userId: number, questionId: number): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/votes/downvote/${userId}/${questionId}`, null);
  }

  getVoteCount(questionId: number): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/votes/content/${questionId}`);
  }

}
