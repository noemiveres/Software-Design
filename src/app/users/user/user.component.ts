import { Component, Input } from '@angular/core';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: User = {} as User;
  @Input() title: string = "Insert user"
  @Input() newUser: User = {
    id:0,
    firstName:"Please insert name",
    lastName: "Please Insert lastname",
    email: "Please Insert email",
    password: "Please Insert password",
    phoneNumber: "Please Insert phone number",
    userType: "Please Insert user type"
  };
}
