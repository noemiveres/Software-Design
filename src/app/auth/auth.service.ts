import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm, RegisterForm } from '../types/Auth';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/User';
import { environment } from 'src/environment/environment';
import { BehaviorSubject, Observable, catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import { LoginResponse } from './login/login-respone';
import jwt_decode, { JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;

  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(private router: Router,
    private http: HttpClient) {
    const storedUser = localStorage.getItem('user');
    this.userSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.user = this.userSubject.asObservable();
  }

  register(form: RegisterForm) {
    if (form.password !== form.confirm_password) {
      this.passwordMatched = false;
      return;
    }

    return this.http.post(`${environment.apiUrl}/register`, form).subscribe(
      () => {
        alert('Registration successful! You can now log in and ask your own questions.');
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.log('Registration error:', error);
      }
    );
  }

  login(form: LoginForm): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${environment.apiUrl}/login`, { email: form.email, password: form.password })
    .pipe(
      switchMap((response: any) => {
        // Check if the user is banned
        if (response.banned) {
          alert('You are banned. Login is not allowed.');
          return throwError('User is banned. Login is not allowed.');
        } else {
          // If the user is not banned, continue with the login process
          localStorage.setItem('jwt', response.accessToken);
          this.isAuthenticated = true; // set isAuthenticated to true when the user logs in successfully
          return of(response);
        }
      }),
      catchError(error => {
        // Handle any additional error logic here
        return throwError(error);
      })
    );
  }

  logout() {
    localStorage.removeItem('jwt');
    this.isAuthenticated = false;
    this.router.navigateByUrl('/login');
  }

  getUserInfo(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${userId}`);
  }

  updateUserInfo(user: User): Observable<User> {
    console.log('Updating user:', user);
    return this.http.put<User>(`${environment.apiUrl}/users/${user.userId}`, user)
      .pipe(
        map(updatedUser => {
          return updatedUser;
        })
      );
  }
  

  getCurrentUser(): Observable<User | null> {
    const token = this.getToken();
    if (token) {
      const decodedToken = jwt_decode(token) as JwtPayload;
      console.log(decodedToken);
      if (decodedToken.sub) {
        const email = decodedToken.sub;
        return this.http.get<User>(`${environment.apiUrl}/users/email/${email}`).pipe(
          map(user => {
            console.log('Current user:', user);
            return user;
          })
        );
      } else {
        console.log('No decodedToken.sub found, returning null');
        return of(null);
      }
    } else {
      console.log('No token found, returning null');
      return of(null);
    }
  }

  getToken(): string | null {
    const token = localStorage.getItem('jwt');
    if (token) {
      return token;
    } else {
      console.log('No token found, returning null');
      return null;
    }
  }
}