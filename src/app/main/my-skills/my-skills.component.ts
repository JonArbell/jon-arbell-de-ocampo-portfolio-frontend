import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  imports: [],
  templateUrl: './my-skills.component.html'
})
export class MySkillsComponent {
  stacks : TechStacks[] = [
    new TechStacks('Java 23','/img/java.png'),
    new TechStacks('Spring Boot 3','/img/spring.png'),
    new TechStacks('PostgreSQL','/img/postgresql.png'),
    new TechStacks('JavaScript','/img/js.png'),
    new TechStacks('TypeScript','/img/ts.png'),
    new TechStacks('Angular 19','/img/angular.png'),
    new TechStacks('CSS','/img/css-3.png'),
    new TechStacks('Tailwind CSS','/img/tailwind.png'),
    new TechStacks('GitHub','/img/github.png')
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