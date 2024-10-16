import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit{

  score: number = 0;
  quizId: number = 0;

  constructor(private route: ActivatedRoute,
              private router: Router ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.score = +params['number']; // Convertir en nombre
      console.log('Level Number:', this.score); // Utilisez ce numéro comme vous le souhaitez
    });
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.quizId = navigation.extras.state['quizId'];
    }
  }

  nextLevel() {
    this.router.navigate(['/home']);
  }

}
