import { Component, Input } from '@angular/core';
import { Question } from 'src/app/types/Question';
import { User } from 'src/app/types/User';
import { QuestionsService } from '../questions.service';
import { AuthService } from 'src/app/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { TagsService } from '../tags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: []
})
export class NewQuestionComponent {
  tagsForm: FormGroup = new FormGroup({});
  selectedTags: string[] = [];
  tags: string[] = [];
  filteredTags: Observable<string[]> = of([]);
  newTag: string;

  @Input() question: Question = { id: 0, author: {} as User, title: '', text: '', creationDate: {} as Date, picture: '', tags: [] };

  constructor(private questionsService: QuestionsService, private tagsService: TagsService,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router) {
    this.newTag = '';
  }

  ngOnInit() {
    this.tagsForm = this.fb.group({
      tags: ['']
    });

    this.tagsService.getTags().subscribe(tags => {
      this.tags = tags;
      console.log(this.tags);
      this.filteredTags = this.tagsForm.controls['tags'].valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    });
  }

  private _filter(value: any): any {
    const filterValue = value.toLowerCase();
    return this.tags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }

  onSelect(event: any) {
    // update the selected tags array
    const selectedValue = event.target.value;
    if (selectedValue && !this.selectedTags.includes(selectedValue)) {
      this.selectedTags.push(selectedValue);
    }
  }

  addTag(newTagInput: HTMLInputElement, event: Event) {
    event.preventDefault();
    const tagName = newTagInput.value.trim();
    if (!tagName) {
      return;
    }
    if (!this.selectedTags.includes(tagName)) {
      this.selectedTags.push(tagName);
    }
    if (!this.tags.includes(tagName)) {
      this.tags.push(tagName);
    }
    this.tagsService.addTag(tagName).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
    newTagInput.value = '';
  }

  newQuestion() {
    if (this.authService.isAuthenticated) {
      this.authService.getCurrentUser().subscribe((user: User | null) => {
        console.log("user: ", user);
        if (user) {
          const question = {
            ...this.question,
            creationDate: new Date(),
            tags: this.selectedTags,
            author: user
          };
          console.log("question: ", question);
          this.questionsService.addQuestion(question)
            .subscribe(
              (response: Question) => {
                console.log('Question added successfully:', response);
                alert('Question added successfully.');
                this.router.navigate(['']);
              },
              (error) => {
                console.error('Error adding question:', error);
              }
            );
        } else {
          console.error('Could not get current user.');
        }
      });
    } else {
      alert('You must be logged in to ask a question.');
    }
  }


}