import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from "./main/footer/footer.component";
import { filter, map } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterModule, FooterComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'Jon Arbell De Ocampo';

  isUriInHeroSection : boolean = false;

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => {
          // Extract current route
          const navEvent = event as NavigationEnd;
          const currentUri = navEvent.urlAfterRedirects;
          console.log('Current Route:', currentUri);
  
          // Update hero section flag
          this.isUriInHeroSection = currentUri === '/';
  
          // Extract title from route
          let child = this.activatedRoute.firstChild;
          while (child?.firstChild) {
            child = child.firstChild;
          }
          return child?.snapshot.data['title'] || 'Default Title';
        })
      )
      .subscribe(title => {
        this.titleService.setTitle(title);
      });
  }

}
