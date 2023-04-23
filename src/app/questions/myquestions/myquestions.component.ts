import { Component } from '@angular/core';
import { Question } from 'src/app/types/Question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-myquestions',
  templateUrl: './myquestions.component.html',
  styleUrls: ['./myquestions.component.css']
})
export class MyQuestionsComponent {
  questions: Question[] = [];

  constructor(private questionsService: QuestionsService) { 
    
  }

  ngOnInit(): void {
    this.questions = this.questionsService.getMyQuestions();
  }

  currentIndex = 5;

  showMore() {
    this.currentIndex += 5;
  }
}
