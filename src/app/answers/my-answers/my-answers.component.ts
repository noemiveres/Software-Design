import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/types/Answer';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-my-answers',
  templateUrl: './my-answers.component.html',
  styleUrls: ['./my-answers.component.css']
})

export class MyAnswersComponent implements OnInit{
  answers: Answer[] = [];

  constructor(private answersService: AnswersService) { 
    
  }

  ngOnInit(): void {
    this.answers = this.answersService.getMyAnswers();
  }

  currentIndex = 5;

  showMore() {
    this.currentIndex += 5;
  }
}
