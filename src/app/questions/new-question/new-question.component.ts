import { Component, Input } from '@angular/core';
import { Question } from 'src/app/types/Question';
import { User } from 'src/app/types/User';
import { QuestionsService } from '../questions.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent {
  @Input() question: Question = { id: 0, author: {} as User, title: '', text: '', creationDate: {} as Date, picture: '', tags: [] };

  constructor(private questionsService: QuestionsService, private authService: AuthService) {
  }

  newQuestion() {
    if (this.authService.isAuthenticated) {
      this.questionsService.addQuestion(this.question);
    }
    else {
      alert("You must be logged in to ask a question.");
    }
  }
}
