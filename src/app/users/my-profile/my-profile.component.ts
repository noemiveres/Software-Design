import { Component, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../types/User';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user: User = {} as User;
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
      //this.user = user;
    }

  }

  onSave(): void {
    this.authService.updateUserInfo();
  }
}
