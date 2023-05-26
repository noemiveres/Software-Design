import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/types/Question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: []
})
export class EditQuestionComponent {
  @Input() question: Question = {} as Question;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionService: QuestionsService
  ) { }

  ngOnInit() {
    const questionId = this.route.snapshot.paramMap.get('id');
    if (questionId) {
      this.questionService.getQuestionById(parseInt(questionId)).subscribe(
        (question: Question) => {
          this.question = question;
        },
        (error: any) => {
          console.error('Error retrieving question:', error);
        }
      );
    }

  }

  onSaveChanges() {
    console.log(this.question);
    this.questionService.updateQuestion(this.question).subscribe(
      () => {
        alert('Question updated successfully.');
        this.router.navigate(['']);
      },
      (error) => {
        console.error('Error updating question:', error);
      }
    );
  }

  onCancel() {
    this.router.navigate(['/questions']);
  }
}
