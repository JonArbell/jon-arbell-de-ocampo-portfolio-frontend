import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from "./main/hero-section/hero-section.component";
import { AboutMeComponent } from './main/about-me/about-me.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { HobbiesComponent } from './main/hobbies/hobbies.component';
import { FooterComponent } from './main/footer/footer.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ContactMeComponent } from './main/contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, AboutMeComponent,ProjectsComponent,SkillsComponent,HobbiesComponent,FooterComponent, ContactMeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit{
  title = 'Jon Arbell De Ocampo';
  activatedRoute : ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    
    this.activatedRoute.fragment.subscribe((data)=>{
      if (data) {
        this.jumpToSection(data);
      }
    });

  }

  jumpToSection(data : string) : void{
    document.querySelector(`#${data}`)?.scrollIntoView({behavior : 'smooth'});
  }

}
