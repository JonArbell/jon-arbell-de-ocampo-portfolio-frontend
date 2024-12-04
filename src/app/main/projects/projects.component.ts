import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './projects.component.html'
})

export class ProjectsComponent {

  projects : ProjectModel[] = [
    new ProjectModel('PEA TO-DO LIST APPLICATION','assets/img/pea.png','This is a to-do list app developed using Spring Boot, Spring Security, Vanilla JS, and Tailwind CSS. It showcases my learning in backend development.','https://pea-todo-list-application.onrender.com/'),
    new ProjectModel('Tic-tac-toe','assets/img/tictactoe.png','This is a simple Tic Tac Toe game developed using HTML, CSS, and JavaScript. The primary goal of this project is to enhance my JavaScript DOM manipulation skills.','https://jonarbell.github.io/Tic-tac-toe/'),
    new ProjectModel('The Dice Game','assets/img/dice.png',`This is a simple Dice Game developed using HTML, CSS, and JavaScript. The game is part of a challenge requirement from Angela's "The Complete 2024 Web Development Bootcamp" on Udemy. In this game, each time a user clicks the webpage, two dice are rolled and their totals are compared. The dice with the higher number wins.`,'https://jonarbell.github.io/Boss-Level-Challenge-1-The-Dice-Game/'),
    new ProjectModel('The Simon Game','assets/img/simon.png',`The Simon Game is a memory game where the player needs to repeat a sequence of colors shown by the computer. This project was created as part of the Udemy course The Complete 2024 Web Development Bootcamp .`,'https://jonarbell.github.io/Boss-Level-Challenge-2-The-Simon-Game/')
  ];

  currentIndex : number = 0;

  getCurrentCard() : ProjectModel{
    return this.projects[this.currentIndex];
  }

  nextCard() : void{
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  previousCard() : void{
    if (this.currentIndex === 0) this.currentIndex = this.projects.length - 1;
     else this.currentIndex--;
  }
  

}

class ProjectModel{
  constructor(private title : string, private pngPath : string, private description : string, private link : string){}

  getTitle () : string{
    return this.title;

  }

  getPngPath() : string{
    return this.pngPath;
  }

  getDescription() : string{
    return this.description;
  }
  
  getLink() : string{
    return this.link;
  }

}
