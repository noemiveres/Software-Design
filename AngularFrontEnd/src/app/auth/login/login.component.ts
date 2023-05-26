import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  form: LoginForm = {
    email: '',
    password: '',
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  submit() {
    this.authService.login(this.form).subscribe(
      () => {
        // Navigate to the homepage if the login was successful
        this.router.navigate(['/']);
        this.authService.isAuthenticated = true;
      },
      error => {
        console.log('Login error:', error);
      }
    );
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
