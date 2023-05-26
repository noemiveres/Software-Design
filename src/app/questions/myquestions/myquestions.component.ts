import { Component } from '@angular/core';
import { Question } from 'src/app/types/Question';
import { QuestionsService } from '../questions.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-myquestions',
  templateUrl: './myquestions.component.html',
  styleUrls: []
})
export class MyQuestionsComponent {
  questions: Question[] = [];
  currentUser: User = {} as User;

  constructor(private questionsService: QuestionsService, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.questionsService.getMyQuestions().subscribe(
          questions => {
            this.questions = questions;
          },
          error => {
            console.error(error);
          }
        );
      }
    });
  }


  currentIndex = 5;

  showMore() {
    this.currentIndex += 5;
  }
}
