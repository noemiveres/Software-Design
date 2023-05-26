import { Component } from '@angular/core';
import { User } from '../types/User';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  users: User[] = [];

  constructor(
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      (users: User[]) => {
      this.users = users;
    }
    );
  } 
}
