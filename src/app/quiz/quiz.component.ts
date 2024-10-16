import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/services/quiz.service";
import { CategorieService } from '../shared/services/categorie.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  category : {categoryId: number, categryName: string} = {categoryId: 0, categryName: ''};


  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategorieService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category.categoryId = params['categoryId'];
      // this.categoryService.getCategorieQuiz(this.category.categoryId);
      // console.log("test : ", this.categoryService.getCategorieQuiz(this.category.categoryId));
      this.category.categryName = this.quizService.getCategory(this.category.categoryId);
      // this.quizService.playerName = params['playerName'];
      // this.playerName = params['playerName'];
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
