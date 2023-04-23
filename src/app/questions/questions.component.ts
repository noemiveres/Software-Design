import { Component, OnInit } from '@angular/core';
import { Question } from '../types/Question';
import { QuestionsService } from './questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{
  questions: Question[] = [];

  constructor(private questionsService: QuestionsService) { 
    
  }

  areDisplayed: boolean = false;

  ngOnInit(): void {
    this.questions = this.questionsService.getAllQuestions();
  }

  currentIndex = 5;

  showMore() {
    this.currentIndex += 5;
  }

}
