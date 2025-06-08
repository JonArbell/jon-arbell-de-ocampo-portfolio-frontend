import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  styleUrls: ['header.component.css'],
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
  @Input() isUriInHeroSection: boolean = false;

  isClicked = signal<boolean>(false);

  private clickListener!: EventListener;

  ngOnInit(): void {
    this.clickListener = (event : Event) =>{

      const hamburgerButton = document.querySelector('#hamburger-button');
      if (!hamburgerButton?.contains(event.target as Node)) {
        this.isClicked.set(!this.isClicked())
      }
    };

    document.addEventListener('click', this.clickListener);

  }

  hamburgerClick() : void{

    this.isClicked.set(!this.isClicked())

  }
}
