import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Question } from '../../model/question';
import { DifficultyLevel, QuizLevel } from '../../model/quizLevel';
import { QuizLevelService } from 'src/app/service/quizLevel.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  quizlevel : QuizLevel[] = [];

  constructor(private quizLevelService: QuizLevelService){}

  ngOnInit(): void {
      this.quizLevelService.getQuizLevels().subscribe((quizLevels: any) =>{
        console.log("search => ", quizLevels);
        this.quizlevel = quizLevels;
      })
  }

}
