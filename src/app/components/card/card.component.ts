import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() display! : any ;

  hasGetTitleMethod(): boolean {
    return typeof this.display?.getTitle === 'function';
  }

  hasGetLinkMethod(): boolean {
    return typeof this.display?.getLink === 'function';
  }

  hasGetDeviceMethod():boolean{
    return typeof this.display?.getDevice === 'function';
  }

  hasGetLocationMethod():boolean{
    return typeof this.display?.getLocation === 'function';
  }
}
