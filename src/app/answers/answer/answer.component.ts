import { Component, Input } from '@angular/core';
import { Answer } from 'src/app/types/Answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  @Input () answer: Answer = {} as Answer;
}
