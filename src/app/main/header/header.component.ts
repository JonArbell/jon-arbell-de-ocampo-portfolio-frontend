import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  home : string = 'Home';
  header : string[] = ['About','Projects','Skills','Hobbies','Contact']

}
