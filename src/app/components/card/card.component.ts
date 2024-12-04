import { CommonModule } from '@angular/common';
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html'
})
export class CardComponent {

  @Input() displayProject! : any ;

  hasGetTitleMethod(): boolean {
    return typeof this.displayProject?.getTitle === 'function';
  }

  hasGetLinkMethod(): boolean {
    return typeof this.displayProject?.getLink === 'function';
  }

  hasGetDeviceMethod():boolean{
    return typeof this.displayProject?.getDevice === 'function';
  }

  hasGetLocationMethod():boolean{
    return typeof this.displayProject?.getLocation === 'function';
  }

}
