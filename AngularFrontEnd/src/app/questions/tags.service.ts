import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  private apiUrl = 'http://localhost:8080/tags';

  constructor(private http: HttpClient) { }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  addTag(tagName: string): Observable<string> {
    return this.http.post<string>(this.apiUrl, tagName).pipe(
      catchError((err) => {
        console.error('Error adding tag:', err);
        return throwError('Could not add tag. Please try again later.');
      })
    );
  }
}