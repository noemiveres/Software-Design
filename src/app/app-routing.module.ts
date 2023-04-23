import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { QuestionsComponent } from './questions/questions.component';
import { AnswerComponent } from './answers/answer/answer.component';
import { UserComponent } from './users/user/user.component';
import { NewQuestionComponent } from './questions/new-question/new-question.component';
import { NewAnswerComponent } from './answers/new-answer/new-answer.component';
import { MyProfileComponent } from './users/my-profile/my-profile.component';
import { AnswersComponent } from './answers/answers.component';
import { MyAnswersComponent } from './answers/my-answers/my-answers.component';
import { MyQuestionsComponent } from './questions/myquestions/myquestions.component';

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'questions/new', component: NewQuestionComponent },
  { path: 'answers/new', component: NewAnswerComponent },
  { path: 'user/profile', component: MyProfileComponent},
  { path: 'user/answers', component: MyAnswersComponent},
  { path: 'user/questions', component: MyQuestionsComponent},
  { path: 'questions/:id/answers', component: AnswersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
