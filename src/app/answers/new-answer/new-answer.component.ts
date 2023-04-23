import { Component, Input } from '@angular/core';
import { Answer } from 'src/app/types/Answer';
import { Question } from 'src/app/types/Question';
import { User } from 'src/app/types/User';
import { AnswersService } from '../answers.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent {
  @Input() answer: Answer = { id: 0, author: {} as User, text: '', creationDate: {} as Date, picture: '', question: {} as Question };

  constructor(private answersService: AnswersService, private authService: AuthService) { 
    
  }
  
  newAnswer() {
    if (this.authService.isAuthenticated) {
      this.answersService.addAnswer(this.answer); 
    } else {
      alert("You must be logged in to answer a question.");
    }
  }
}
