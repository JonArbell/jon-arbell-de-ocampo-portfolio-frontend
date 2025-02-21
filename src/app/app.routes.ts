import { Routes } from '@angular/router';
import { HeroSectionComponent } from './main/hero-section/hero-section.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { ContactMeComponent } from './main/contact-me/contact-me.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { SkillsComponent } from './main/skills/skills.component';
import { HobbiesComponent } from './main/hobbies/hobbies.component';

export const routes: Routes = [

    {
        path : '' , 
        component : HeroSectionComponent,
        data: { title: 'Jon Arbell De Ocampo' }
    },
    {
        path : 'about-me' , 
        component : AboutMeComponent,
        data: { title: 'About Me' }
    },
    {
        path : 'contact-me' , 
        component : ContactMeComponent,
        data: { title: 'Contact Me' }
    },
    {
        path : 'projects' , 
        component : ProjectsComponent,
        data: { title: 'My Projects' }
    },
    {
        path : 'my-skills' , 
        component : SkillsComponent,
        data: { title: 'My Skills' }
    },
    {
        path : 'hobbies' , 
        component : HobbiesComponent,
        data: { title: 'My Hobbies' }
    }

];

