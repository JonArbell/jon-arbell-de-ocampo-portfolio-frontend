import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  imports: [],
  templateUrl: './hobbies.component.html'
})
export class HobbiesComponent {
  photographs : PhotographModel[] = [
    new PhotographModel('📌Uptown Mall, BGC, Taguig City',`"If you spend too much time thinking about a thing, you'll never get it done. Make at least one definite move daily toward your goal."

~ Bruce Lee`,`📸 Tecno Camon 20s Pro 5G`,'assets/img/hobbies_picture.png',''),
    new PhotographModel('📌Tumana, Marikina City',`"Great things never came from comfort zones."`,`📸 Realme 5 Pro`,'assets/img/hobbies_picture.png',''),
    new PhotographModel('📌Uptown Mall, BGC, Taguig City',`"Great things never came from comfort zones."`,`📸 Tecno Camon 20s Pro 5G`,'assets/img/hobbies_picture.png','')
  ];

  photoManipulation : PhotoManipulationModel[] = [
    new PhotoManipulationModel('','','','assets/img/hobbies_picture.png',''),
    new PhotoManipulationModel('','','','assets/img/hobbies_picture.png','')
  ]

  hobbies : any[] = [this.photographs,this.photoManipulation];
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