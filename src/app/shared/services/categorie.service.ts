import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn : 'root'
})
export class CategorieService{
    quizContent: any[] = [];
    categoryId: number = 0;

    constructor(private http: HttpClient) {

    }

    getCategories() {
        return this.http.get('http://localhost:3000/categories');
    }

    getCategorieQuiz(idCategorie: number){
        this.http.get(`http://localhost:3000/questions?idCategorie=${idCategorie}`).subscribe((questions: any) => {
            console.log("testing : ", questions);
            for (const question of questions) {
                this.http.get(`http://localhost:3000/answers?questionId=${question.id}`).subscribe((answers: any) => {
                    console.log("answer : ",answers);
                    console.log("id : ", question.id);
                  this.quizContent.push({
                      id: question.id,
                      question: question.questionLabel,
                      answers
                  });
                });
              }
        });
        console.log('finally : ', this.quizContent);
    }
}