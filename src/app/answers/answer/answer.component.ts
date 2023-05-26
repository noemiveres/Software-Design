import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Answer } from 'src/app/types/Answer';
import { User } from 'src/app/types/User';
import { AnswersService } from '../answers.service';
import { Location } from '@angular/common';
import { EmailService } from 'src/app/email.service';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit{
  @Input () answer: Answer = {} as Answer;

  currentUser: User = {} as User;

  voteCount: number = 0;

  score: number = 0;

  constructor(private authService: AuthService, 
    private router: Router,
    private answersService: AnswersService,
    private usersService: UsersService,
    private location: Location,
    private emailService: EmailService,) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.currentUser = user;
      }
    });
    this.getVoteCount();
    this.getScore();
  }

  editAnswer() {
    const answerId = this.answer.id;
    this.router.navigate(['/answers', answerId, 'edit']);
  }

  deleteAnswer() {
    this.answersService.deleteAnswer(this.answer.id)
  .subscribe(
    () => {
      alert('Answer deleted successfully. Please reload the page.');
    },
    (error) => {
      console.error('Error deleting answer:', error);
    }
  );
  }

  toggleBanUser(): void {
    const { answer } = this;
    if (!answer || !answer.author) return;
  
    const { author } = answer;
    const updatedAuthor = { ...author, banned: !author.banned };
  
    const emailContent = updatedAuthor.banned
      ? { subject: "Banned from StackOverflow", msgBody: "Due to bad behavior, you have been banned. You cannot log in anymore" }
      : { subject: "Unbanned from StackOverflow", msgBody: "You have been unbanned. You can log in again" };
  
    this.emailService.sendEmail(updatedAuthor.email, emailContent.msgBody, emailContent.subject).subscribe();
    
    this.authService.updateUserInfo(updatedAuthor).subscribe(
      () => {
        alert('User ban status updated successfully.');
      },
      (error) => console.error('Error updating user ban status:', error)
    );
  }

  like(){
    this.answersService.likeAnswer(this.currentUser.userId,this.answer.id).subscribe(
      () => {
        this.getVoteCount();
      },
      (error) => console.error('Error liking answer:', error)
    );
  }
  
  dislike(){
    this.answersService.dislikeAnswer(this.currentUser.userId,this.answer.id).subscribe(
      () => {
        this.getVoteCount();
      },
      (error) => console.error('Error disliking answer:', error)
    );
  }

  getVoteCount() {
    this.answersService.getVoteCount(this.answer.id).subscribe(
      (count) => {
        this.voteCount = count;
      }
    );
  }

  getScore() {
    this.usersService.getScore(this.answer.author.userId).subscribe(
      (score) => {
        this.score = score;
      }
    );
  }
  
}
