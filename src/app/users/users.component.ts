import { Component } from '@angular/core';
import { User } from '../types/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  users: User[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@yahoo.com',
      password: 'password',
      phoneNumber: '1234567890',
      userType: 'regular', // or moderator
    },
    {
      id: 2,
      firstName: 'Harry',
      lastName: 'Potter',
      email: 'harrypotter@yahoo.com',
      password: 'secretpwd',
      phoneNumber: '0123456789',
      userType: 'regular', // or moderator
    },
    {
      id: 3,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@yahoo.com',
      password: 'password123',
      phoneNumber: '5551234567',
      userType: 'regular', // or moderator
    },
    {
      id: 4,
      firstName: 'Sarah',
      lastName: 'Smith',
      email: 'sarahsmith@yahoo.com',
      password: 'abc123',
      phoneNumber: '8881234567',
      userType: 'regular', // or moderator
    },
    {
      id: 5,
      firstName: 'Tom',
      lastName: 'Jones',
      email: 'tjones@yahoo.com',
      password: 'qwerty',
      phoneNumber: '1234567890',
      userType: 'moderator',
    },
    {
      id: 6,
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'ajohnson@yahoo.com',
      password: 'mypassword',
      phoneNumber: '9991234567',
      userType: 'moderator',
    },
    {
      id: 7,
      firstName: 'Michael',
      lastName: 'Jordan',
      email: 'mjordan@yahoo.com',
      password: 'basketball',
      phoneNumber: '7771234567',
      userType: 'regular', // or moderator
    },
    {
      id: 8,
      firstName: 'William',
      lastName: 'Smith',
      email: 'wsmith@yahoo.com',
      password: 'mypassword123',
      phoneNumber: '6661234567',
      userType: 'regular', // or moderator
    },
    {
      id: 9,
      firstName: 'Emily',
      lastName: 'Davis',
      email: 'edavis@yahoo.com',
      password: 'password456',
      phoneNumber: '1111234567',
      userType: 'regular', // or moderator
    },
    {
      id: 10,
      firstName: 'Oliver',
      lastName: 'Wilson',
      email: 'owilson@yahoo.com',
      password: 'abcxyz',
      phoneNumber: '2221234567',
      userType: 'regular', // or moderator
    }]


  areDisplayed: boolean = false;

}
