import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/types/Answer';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-edit-answer',
  templateUrl: './edit-answer.component.html',
})
export class EditAnswerComponent {
  @Input() answer: Answer = {} as Answer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private answersService: AnswersService
  ) { }

  ngOnInit() {
    const answerId = this.route.snapshot.paramMap.get('id');
    if (answerId) {
      this.answersService.getAnswerById(parseInt(answerId)).subscribe(
        (answer: Answer) => {
          this.answer = answer;
        },
        (error: any) => {
          console.error('Error retrieving answer:', error);
        }
      );
    }

  }

  onSaveChanges() {
    this.answersService.updateAnswer(this.answer).subscribe(
      () => {
        this.router.navigate(['questions/' + this.answer.question.id + '/answers']);
      },
      (error) => {
        console.error('Error updating answer:', error);
      }
    );
  }

  onCancel() {
    this.router.navigate(['/answers']);
  }
}
