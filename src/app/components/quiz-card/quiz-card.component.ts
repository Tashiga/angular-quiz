import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DifficultyLevel, QuizLevel } from 'src/app/model/quizLevel';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent implements OnInit{

  @Input() quizLevel : QuizLevel = {quizId: 0, level: DifficultyLevel.EASY, levelNumber: 0, quizName: ''};
  
  constructor(private route: Router){}

  ngOnInit(): void {}

  navigateToQuiz() {
    this.route.navigate(['/questions', this.quizLevel.quizId]);
  }

}
