import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/types/User';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: User = {} as User;
  currentUser: User = {} as User;
  score: number = 0;

  constructor(private authService: AuthService,
    private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getScore(this.user.userId).subscribe(
      (score: number) => {
        this.score = score;
      });
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.currentUser = user;
      }
    }
    );
  }

  unbanUser() {
    this.usersService.unbanUser(this.user);
  }
}
