import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class QuizLevelService{
    questions: any[] = [];
    quizLevelId: number = 0;

    constructor(private http: HttpClient){}

    getQuizLevels(){
        return this.http.get('http://localhost:3000/quizLevel')
    }

    getQuizLevelById(quizId: number){
        return this.http.get(`http://localhost:3000/quizLevel?quizId=${quizId}`);
    }

    getQuizLevelQuestions(quizId: number) {
        this.http.get(`http://localhost:3000/questions?quizId=${quizId}`)
        .subscribe((questions: any)=> {
            console.log("question : ", questions);
            this.questions = questions;
        });
        return this.questions;
    }

    init(){
        this.questions = [];
        this.quizLevelId = 0;
    }
}