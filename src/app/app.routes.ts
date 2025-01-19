import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { HeroSectionComponent } from './main/hero-section/hero-section.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ContactMeComponent } from './main/contact-me/contact-me.component';

export const routes: Routes = [
    {
        path : '',
        component: HeroSectionComponent,
        pathMatch : 'full'
    }
];

