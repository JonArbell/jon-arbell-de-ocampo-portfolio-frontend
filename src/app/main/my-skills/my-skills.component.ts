import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  imports: [],
  templateUrl: './my-skills.component.html'
})
export class MySkillsComponent {
  stacks : TechStacks[] = [
    new TechStacks('Java 23','assets/img/java.png'),
    new TechStacks('Spring Boot 3','assets/img/spring.png'),
    new TechStacks('PostgreSQL','assets/img/postgresql.png'),
    new TechStacks('JavaScript','assets/img/js.png'),
    new TechStacks('TypeScript','assets/img/ts.png'),
    new TechStacks('Angular 19','assets/img/angular.png'),
    new TechStacks('CSS','assets/img/css-3.png'),
    new TechStacks('Tailwind CSS','assets/img/tailwind.png'),
    new TechStacks('GitHub','assets/img/github.png')
  ];
}

class TechStacks{
  constructor(private techName : string,private imagePath : string) {}

  getTechName() : string{
    return this.techName;
  }

  getImagePath() : string{
    return this.imagePath;
  }
}