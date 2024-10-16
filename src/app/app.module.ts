import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {GuidedTourModule, GuidedTourService} from 'ngx-guided-tour';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuizComponent } from './components/quiz-card/quiz/quiz.component';
import { ScoreComponent } from './components/quiz-card/score/score.component';
import { QuestionComponent } from './components/quiz-card/question/question.component';
import { DemoComponent } from './components/demo/demo.component';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    QuizComponent,
    ScoreComponent,
    QuestionComponent,
    DemoComponent,
    QuizCardComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    GuidedTourModule,
    HttpClientModule
  ],
  providers: [
    GuidedTourService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
