import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { User } from './types/User';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MyStackOverflowFE';
  currentUser: User | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit() {

  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }

}
