import { AfterViewInit, Component } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent implements AfterViewInit{

  ngAfterViewInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

}
