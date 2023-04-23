import { Component, Input } from '@angular/core';
import { Question } from 'src/app/types/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input () question: Question = {} as Question;
}
