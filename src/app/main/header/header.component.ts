import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  home : string = 'Home';
  header : string[] = ['About','Projects','My Skills','Hobbies','Contact']

  isClicked : boolean = false;

  hamburgerClick() : void{

    this.isClicked = !this.isClicked;

  }
}
