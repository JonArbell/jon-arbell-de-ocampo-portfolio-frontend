/**
 * The HeroSectionComponent is a standalone Angular component that represents
 * the hero section of the application. It uses the HeaderComponent as an import.
 *
 * @selector app-hero-section
 * @standalone true
 * @imports HeaderComponent
 * @templateUrl ./hero-section.component.html
 */
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { TitleService } from '../../service/title.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html'
})
export class HeroSectionComponent{

}
