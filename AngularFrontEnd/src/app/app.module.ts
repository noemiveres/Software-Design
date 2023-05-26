import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswersComponent } from './answers/answers.component';
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './users/user/user.component';
import { AnswerComponent } from './answers/answer/answer.component';
import { QuestionComponent } from './questions/question/question.component';
import { AuthModule } from './auth/auth.module';
import { NewQuestionComponent } from './questions/new-question/new-question.component';
import { NewAnswerComponent } from './answers/new-answer/new-answer.component';
import { MyQuestionsComponent } from './questions/myquestions/myquestions.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { EditQuestionComponent } from './questions/edit-question/edit-question.component';
import { EditAnswerComponent } from './answers/edit-answer/edit-answer.component';

@NgModule({ // decorator - tell that it is an Angular module
  declarations: [
    AppComponent,
    AnswersComponent,
    UsersComponent,
    QuestionsComponent,
    UserComponent,
    AnswerComponent,
    QuestionComponent,
    NewQuestionComponent,
    NewAnswerComponent,
    MyQuestionsComponent,
    EditQuestionComponent,
    EditAnswerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
