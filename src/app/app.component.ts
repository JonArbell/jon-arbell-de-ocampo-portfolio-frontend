import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./main/hero-section/hero-section.component";
import { AboutMeComponent } from './main/about-me/about-me.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { HobbiesComponent } from './main/hobbies/hobbies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, AboutMeComponent,ProjectsComponent,HobbiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jon Arbell De Ocampo';
}
