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

~ Bruce Lee`,`📸 Tecno Camon 20s Pro 5G`,'assets/img/photograph_1.png'),
    new PhotographModel('📌Tumana, Marikina City',`"Great things never came from comfort zones."`,`📸 Realme 5 Pro`,'assets/img/photograph_2.png'),
    new PhotographModel('📌Uptown Mall, BGC, Taguig City',`"Great things never came from comfort zones."`,`📸 Tecno Camon 20s Pro 5G`,'assets/img/photograph_3.png'),
    new PhotoManipulationModel('','','','assets/img/photoMani_1.png'),
    new PhotoManipulationModel('','','','assets/img/photoMani_2.png')
  ];

  hobbies : any[] = [this.photographs];
index: any;

  
}

class PhotographModel{
  constructor(private location : string, private description : string,private device : string, private pngPath : string){}

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

  hobbiesSection : boolean = true;

}
class PhotoManipulationModel extends PhotographModel{
  constructor(
    location: string,
    description: string,
    device: string,
    pngPath: string
  ) {
    super(location, description, device, pngPath);
  }

  
  
}