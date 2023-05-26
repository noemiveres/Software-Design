import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { QuestionsComponent } from './questions/questions.component';
import { NewQuestionComponent } from './questions/new-question/new-question.component';
import { NewAnswerComponent } from './answers/new-answer/new-answer.component';
import { AnswersComponent } from './answers/answers.component';
import { MyQuestionsComponent } from './questions/myquestions/myquestions.component';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';
import { EditAnswerComponent } from './answers/edit-answer/edit-answer.component';
import { AuthGuard } from './auth/auth-guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'questions/new', component: NewQuestionComponent, canActivate: [AuthGuard]  },
  { path: 'newAnswer/toQuestion/:id', component: NewAnswerComponent, canActivate: [AuthGuard]  },
  { path: 'answers/:id/edit', component: EditAnswerComponent, canActivate: [AuthGuard]  },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'questions/ofUser', component: MyQuestionsComponent, canActivate: [AuthGuard] },
  { path: 'questions/:id/answers', component: AnswersComponent, canActivate: [AuthGuard] },
  { path: 'questions/:id/edit', component: EditQuestionComponent, canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
