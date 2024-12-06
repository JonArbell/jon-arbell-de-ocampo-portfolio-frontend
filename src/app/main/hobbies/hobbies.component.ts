import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [CardComponent, NgClass],
  templateUrl: './hobbies.component.html'
})
export class HobbiesComponent {

  photographs : PhotographModel[] = [
    new PhotographModel('📌Uptown Mall, BGC, Taguig City',`"If you spend too much time thinking about a thing, you'll never get it done. Make at least one definite move daily toward your goal."

~ Bruce Lee`,`📸 Tecno Camon 20s Pro 5G`,'assets/img/photograph_1.jpg',''),
    new PhotographModel('📌Tumana, Marikina City',`"Great things never came from comfort zones."`,`📸 Realme 5 Pro`,'assets/img/photograph_2.jpg',''),
    new PhotographModel('📌Uptown Mall, BGC, Taguig City',`"Great things never came from comfort zones."`,`📸 Tecno Camon 20s Pro 5G`,'assets/img/photograph_3.jpg','')
  ];

  photoManipulation : PhotoManipulationModel[] = [
    new PhotoManipulationModel('','','','assets/img/photoMani_1.jpg',''),
    new PhotoManipulationModel('','','','assets/img/photoMani_2.jpg','')
  ]

  hobbies : any[] = [this.photographs,this.photoManipulation];
index: any;

  
}

class PhotographModel{
  constructor(private location : string, private description : string,private device : string, private pngPath : string, private link : string){}

  getDevice () : string{
    return this.device;
  }

  getLocation () : string{
    return this.location;
  }

  getDescription () : string{
    return this.description;
  }

  getPngPath () : string{
    return this.pngPath;
  }

  getLink() : string{
    return this.link;
  }


  hobbiesSection : boolean = true;

}
class PhotoManipulationModel extends PhotographModel{
  constructor(
    location: string,
    description: string,
    device: string,
    pngPath: string,
    link : string
  ) {
    super(location, description, device, pngPath,link);
  }

}