import { Component, OnInit} from '@angular/core';
import { Question } from '../../../model/question';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DifficultyLevel, QuizLevel } from '../../../model/quizLevel';
import { QuizLevelService } from 'src/app/service/quizLevel.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{

  quizId: number = 0;
  quizLevel: QuizLevel = {quizId: 0, level: DifficultyLevel.EASY, levelNumber: 0, quizName: ''};
  quizQuestions: Question[] = [];
  selectedAnswers: string[][] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private quizLevelService: QuizLevelService,
              private toastr: ToastrService){}

  ngOnInit(): void {
      this.route.params.subscribe(params=> {
        this.quizId = params['quizId'];
        this.quizLevelService.getQuizLevelById(this.quizId).subscribe((quizLevel: any)=>{
          this.quizLevel = quizLevel[0];
        });
        this.quizQuestions = this.quizLevelService.getQuizLevelQuestions(this.quizId);
        this.initAnswer();
      });
  }

  public submitAnswer(): void {
    if(this.allAnswers()){
      let i: number = 0;
      let totPoints = 0;
      this.quizQuestions.forEach(question=> {
        let questionPoint = true;
        if(this.selectedAnswers!=null && this.selectedAnswers[i]!=null){
          this.selectedAnswers[i].forEach(selectedAnswer=> {
            if(question.answers.indexOf(selectedAnswer)== -1)
              questionPoint = false;
          });
        }
        if(questionPoint)
          totPoints++;
        i++;
      });
      this.throwScore(totPoints);
    } 
  }

  public allAnswers(): boolean {
    let checked: boolean = true;
    this.selectedAnswers.forEach(result => {
      if(result.length == 0)
        checked = false;
    });
    if(!checked)
      this.toastr.warning('Veuillez répondre à toutes les questions avant de soumettre.', 'Alerte !');
    return checked;
  }

  handleSelectedAnswers(data : {num: number, answer: string}) {
    if(data != null && data.num != null && data.answer != null){
      if (!this.selectedAnswers[data.num]) {
        this.selectedAnswers[data.num] = [];
      } 
      const answerIndex = this.selectedAnswers[data.num].indexOf(data.answer);
      if (answerIndex !== -1) {
        this.selectedAnswers[data.num].splice(answerIndex, 1);
      } else {
          this.selectedAnswers[data.num].push(data.answer);
      }
    }
  }

  public initAnswer(): void{
    this.selectedAnswers = [];
    this.quizQuestions.forEach(() => this.selectedAnswers.push([]));
  }

  public throwScore(score: number){
    this.router.navigate(['/score', score], {state: {quizId: this.quizId}});
  }

  public navigateToBack(){
    this.router.navigate(['/home']);
  }

}
