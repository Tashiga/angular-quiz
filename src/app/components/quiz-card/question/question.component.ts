import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../../../model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{

  _question : Question|null= null;
  _questionNumber: number|null = null;
  _checked: string[]  = [];


  @Input('question')
  set question(question: Question){
    this._question = question;
  }

  @Input('questionNumber')
  set questionNumber(questionNumber: number){
    this._questionNumber = questionNumber;
  }

  @Input('checked')
  set checked(checked: string[] ){
    this._checked = checked;
  }

  @Output() selectedAnswersFromQuestion = new EventEmitter<{num: number, answer: string}>();

  constructor(){}

  ngOnInit(): void {}


  public toggleAnswer(questionIndex: number, answer: string): void {
    this.selectedAnswersFromQuestion.emit({num: questionIndex, answer: answer});
  }

  public checkSelectedAnswer(answer: string){
    if(this._checked){
      if(this._checked.includes(answer))
        return true;
    }
    return false;
  }
}
