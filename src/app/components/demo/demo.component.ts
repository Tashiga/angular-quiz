import { Component } from '@angular/core';
import { GuidedTourService } from 'ngx-guided-tour';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  constructor(private tourService: GuidedTourService){}

  startTour() {
    setTimeout(() => {
    this.tourService.startTour({
      tourId: "test",
      steps: [
        {
          title: 'Bienvenue dans l\'application',
          content: 'Ceci est un exemple d\'application Angular utilisant ngx-guided-tour.',
          selector: '.bonjour'
        },
        {
          title: 'Section Questions',
          content: 'Ici, vous pouvez répondre à des questions.',
          selector: '.faire'
        },
        {
          title: 'Bouton Envoyer',
          content: 'Cliquez ici pour soumettre vos réponses.',
          selector: ''
        }
        // Ajoutez d'autres étapes si nécessaire
      ]
    });
   }, 500);
    console.log("test ....");
    console.log("service : ", this.tourService);
  }
}
