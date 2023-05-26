import { Component, OnInit } from '@angular/core';
import { Question } from '../types/Question';
import { QuestionsService } from './questions.service';
import { AuthService } from '../auth/auth.service';
import { TagsService } from './tags.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{
  questions: Question[] = [];
  selectedTag: string = '';
  filteredQuestions: Question[] = [];
  tags: string[] = [];
  tagsForm: FormGroup = new FormGroup({});
  searchTerm: string = '';
  firstName: string = '';
  lastName: string = '';
  areDisplayed: boolean = false;


  constructor(private questionsService: QuestionsService, private authService: AuthService,
    private tagsService: TagsService,
    private fb: FormBuilder,) { 
    
  }

  ngOnInit(): void {
    this.getQuestions();

    this.tagsForm = this.fb.group({
      tags: ['']
    });

    this.tagsService.getTags().subscribe(tags => {
      this.tags = tags;
      console.log(this.tags);
    });
  }
  

  currentIndex = 5;

  showMore() {
    this.currentIndex += 5;
  }

  isLoggedIn(){
    return this.authService.isAuthenticated;
  }

  onSelect(event: any) {
    // update the selected tags array
    const selectedValue = event.target.value;
    if (selectedValue) {
      this.selectedTag = selectedValue;
      this.questionsService.getQuestionsByTag(this.selectedTag).subscribe(
        (questions: Question[]) => {
          this.questions = questions;
        }
      ); 
    }
  }

  filterQuestionsByTitle() {
    this.questionsService.getQuestionsByTitle(this.searchTerm).subscribe(
      (questions: Question[]) => {
        this.questions = questions;
      }
    );
  }

  filterQuestionsByAuthor(firstName: string, lastName: string) {
    this.questionsService.getQuestionsByAuthor(firstName, lastName).subscribe(
      (questions: Question[]) => {
        this.questions = questions;
      }
    );
  }

  getQuestions() {
    this.questionsService.getAllQuestions().subscribe(
      (questions: Question[]) => {
        this.questions = questions;
        this.currentIndex = 5;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
