import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent{

  @Input() isUriInHeroSection: boolean = false;
  
  isClicked : boolean = false;

  hamburgerClick() : void{

    this.isClicked = !this.isClicked;

  }

  
}
