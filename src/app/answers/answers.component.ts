import { Component } from '@angular/core';
import { Answer } from '../types/Answer';
import { AnswersService } from './answers.service';
import { Question } from '../types/Question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../questions/questions.service';
import { User } from '../types/User';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent {
  answers: Answer[] = [];
  question: Question = {} as Question;
  questionId: number = 0;
  voteCount: number = 0;
  
  currentUser: User = {} as User;
  score: number = 0;

  currentIndex: number = 5;

  constructor(private answersService: AnswersService,
    private questionsService: QuestionsService,
    private usersService: UsersService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.getScore();
  }

  areDisplayed: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.questionId = params['id'];
      
      // Fetch the question details
      this.getQuestion();
  
      // Fetch the answers for the question
      this.getAnswers();
    });

    this.authService.getCurrentUser().subscribe(user => {
      if (user) {
        this.currentUser = user;
      }
    });

    this.questionsService.getVoteCount(this.questionId).subscribe(
      (voteCount: number) => {
        this.voteCount = voteCount;
      }
    );
  }

  showMore() {
    this.currentIndex += 5;
  }

  navigateToAnswer(questionId: number) {
    this.router.navigate(['newAnswer/toQuestion', questionId]);
  }

  like(){
    this.questionsService.likeQuestion(this.currentUser.userId,this.question.id).subscribe(
      () => {
        this.getVoteCount();
      },
      (error) => console.error('Error liking question:', error)
    );
  }
  
  dislike(){
    this.questionsService.dislikeQuestion(this.currentUser.userId,this.question.id).subscribe(
      () => {
        this.getVoteCount();
      },
      (error) => console.error('Error disliking question:', error)
    );
  }
  
  getVoteCount() {
    this.questionsService.getVoteCount(this.question.id).subscribe(
      (count) => {
        this.voteCount = count;
      }
    );
  }

  getQuestion() {
    this.questionsService.getQuestionById(this.questionId).subscribe(
      (question: Question) => {
        this.question = question;
      },
      (error: any) => {
        console.log(error);
      }
    );
    }
  
  getAnswers() {
    this.answersService.getAllAnswersToQuestion(this.questionId).subscribe(
      (answers: Answer[]) => {
        this.answers = answers;
        this.currentIndex = 5;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  reload(){
    this.getQuestion();
    this.getAnswers();
    this.getScore();
  }

  getScore() {
    this.usersService.getScore(this.questionId).subscribe(
      (score) => {
        this.score = score;
      }
    );
  }
}
