import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @Input() isUriInHeroSection: boolean = false;
}
