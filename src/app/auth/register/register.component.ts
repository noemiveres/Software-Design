import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';

enum EUserType {
  REGULAR = 'Regular',
  MODERATOR = 'Moderator'
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  userTypes = Object.values(EUserType);

  form: RegisterForm = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    userType: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  passwordMatched: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  submit() {
    this.authService.register(this.form);
  }

  isLoading() {
    return this.authService.isLoading;
  }
}
