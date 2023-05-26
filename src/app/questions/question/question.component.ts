import { Component, Input } from '@angular/core';
import { User } from 'src/app/types/User';
import { AuthService } from 'src/app/auth/auth.service';
import { Question } from 'src/app/types/Question';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';
import { EmailService } from 'src/app/email.service';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input () question: Question = {} as Question;

  currentUser: User = {} as User;

  voteCount: number = 0;

  score: number = 0;

  constructor(private authService: AuthService, private router: Router,
    private questionsService : QuestionsService,
    private emailService: EmailService,
    private usersService: UsersService) { }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.currentUser = user;
      }
    });
    this.getVoteCount();
    this.getScore();
  }

  editQuestion() {
    const questionId = this.question.id;
    this.router.navigate(['/questions', questionId, 'edit']);
  }

  deleteQuestion() {
    this.questionsService.deleteQuestion(this.question.id)
  .subscribe(
    () => {
      alert('Question deleted successfully.');
      
    },
    (error) => {
      console.error('Error deleting question:', error);
    }
  );
  }

  toggleBanUser(): void {
    const { question } = this;
    if (!question || !question.author) return;
  
    const { author } = question;
    const updatedAuthor = { ...author, banned: !author.banned };
  
    const emailContent = updatedAuthor.banned
      ? { subject: "Banned from StackOverflow", msgBody: "Due to bad behavior, you have been banned. You cannot log in anymore" }
      : { subject: "Unbanned from StackOverflow", msgBody: "You have been unbanned. You can log in again" };
  
    this.emailService.sendEmail(updatedAuthor.email, emailContent.msgBody, emailContent.subject).subscribe();
    
    this.authService.updateUserInfo(updatedAuthor).subscribe(
      () => {
        alert('User ban status updated successfully. Please press the "Reload" button to see the changes.');
      },
      (error) => console.error('Error updating user ban status:', error)
    );
  }

  like(){
    this.questionsService.likeQuestion(this.currentUser.userId,this.question.id).subscribe(
      () => {
        this.getVoteCount();
      },
      (error) => console.error('Error liking question:', error)
    );
  }
  
  dislike(){
    this.questionsService.dislikeQuestion(this.currentUser.userId,this.question.id).subscribe(
      () => {
        this.getVoteCount();
      },
      (error) => console.error('Error disliking question:', error)
    );
  }

  getVoteCount() {
    this.questionsService.getVoteCount(this.question.id).subscribe(
      (count) => {
        this.voteCount = count;
      }
    );
  }

  getScore() {
    this.usersService.getScore(this.question.author.userId).subscribe(
      (score) => {
        this.score = score;
      }
    );
  }
}
