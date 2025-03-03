import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() isUriInHeroSection: boolean = false;
  
  isClicked : boolean = false;

  setFalse() : void{
    this.isClicked = false;
  }

  hamburgerClick() : void{

    this.isClicked = !this.isClicked;

  }
}
