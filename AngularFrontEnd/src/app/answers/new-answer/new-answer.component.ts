import { Component, Input } from '@angular/core';
import { Answer } from 'src/app/types/Answer';
import { Question } from 'src/app/types/Question';
import { User } from 'src/app/types/User';
import { AnswersService } from '../answers.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/questions/questions.service';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
})
export class NewAnswerComponent {
  @Input() answer: Answer = { id: 0, author: {} as User, text: '', creationDate: {} as Date, picture: '', question: {} as Question };

  constructor(private answersService: AnswersService, private authService: AuthService,
    private questionsService: QuestionsService,
    private route: ActivatedRoute,
    private router: Router) { 
    
  }
  
  newAnswer() {
    if (this.authService.isAuthenticated) {
      this.authService.getCurrentUser().subscribe((user: User | null) => {
        if (user) {
          const questionId = this.route.snapshot.paramMap.get('id');
          if (questionId){
            this.questionsService.getQuestionById(parseInt(questionId)).subscribe((question: Question) => {
              const answer = {
                ...this.answer,
                creationDate: new Date(),
                author: user,
                question: question // Assign the retrieved question object to the question attribute
              };
              this.answersService.addAnswer(answer)
                .subscribe(
                  (response: Answer) => {
                    console.log('Answer added successfully:', response);
                    alert('Answer added successfully.');
                    this.router.navigate(['']);
                  },
                  (error) => {
                    console.error('Error adding answer:', error);
                  }
                );
            });
          }
        } else {
          console.error('Could not get current user.');
        }
      });
    } else {
      alert('You must be logged in to give an answer.');
    }
  }
  
}
