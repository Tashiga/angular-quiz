import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ScoreComponent } from './components/quiz-card/score/score.component';
import { DemoComponent } from './components/demo/demo.component';
import { QuizComponent } from './components/quiz-card/quiz/quiz.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent},
  { path : 'score', component: ScoreComponent},
  { path : 'questions/:quizId', component : QuizComponent},
  { path: 'score/:number', component: ScoreComponent},
  { path: 'demo', component: DemoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
