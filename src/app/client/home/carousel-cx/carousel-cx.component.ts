import { Component } from '@angular/core';
import { log } from 'console';
import { environment } from 'src/app/environments/environment';
import { Center } from 'src/app/model/center';
import { Image } from 'src/app/model/image';
import { CenterService } from 'src/app/services/admin/center/center.service';

@Component({
  selector: 'app-carousel-cx',
  templateUrl: './carousel-cx.component.html',
  styleUrls: ['./carousel-cx.component.scss']
})
export class CarouselCxComponent {
  public slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor(private centerService: CenterService) { 
  }
  ngOnInit() {
    this.centerService.getTopVus().subscribe(
      (response) => {
        if (response.result) {
          let index_image = 0;
          response.result.forEach((center:Center) => {
            const images = center.image ? [...center.image] : [null];
            images.forEach(image => {

              let img = image as Image;
              console.log( environment.url+img.path);
              this.slides[index_image++] = {
                src: environment.url+img.path,
              };
            });
          });
          console.log( this.slides );
          
        }
      }
    );
  }
}
