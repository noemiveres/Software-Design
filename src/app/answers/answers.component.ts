import { Component } from '@angular/core';
import { Answer } from '../types/Answer';
import { AnswersService } from './answers.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent {
  answers: Answer[] = [];

  constructor(private answersService: AnswersService) { 
    
  }

  areDisplayed: boolean = false;

  ngOnInit(): void {
    this.answers = this.answersService.getAllAnswersToQuestion();
  }

  currentIndex = 5;

  showMore() {
    this.currentIndex += 5;
  }

}
