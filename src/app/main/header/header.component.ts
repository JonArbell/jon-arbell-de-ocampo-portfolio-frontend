import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  @Input() isUriInHeroSection: boolean = false;

  isClicked : boolean = false;

  private clickListener!: EventListener;

  ngOnInit(): void {
    this.clickListener = (event : Event) =>{

      const hamburgerButton = document.querySelector('#hamburger-button');
      if (!hamburgerButton?.contains(event.target as Node)) {
        this.isClicked = false;
      }
    };

    document.addEventListener('click', this.clickListener);

  }

  hamburgerClick() : void{

    this.isClicked = !this.isClicked;

  }
}
