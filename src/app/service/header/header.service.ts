import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService implements OnInit{

  constructor() { }
  public isUriInHeroSection : boolean = false;
  ngOnInit(): void {
    const currentUri = window.location.href;

    if(currentUri === '/'){
      this.isUriInHeroSection = !this.isUriInHeroSection;

      console.log(currentUri);
    }
  }
}
