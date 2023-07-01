import { Component } from '@angular/core';
import { Center } from '../../../model/center';
import { Category } from '../../../model/category';
import { CenterService } from 'src/app/services/admin/center/center.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Image } from 'src/app/model/image';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
  public center:Center;
  public baseurl = environment.url;
  public image:any[];
  public slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor(private route:ActivatedRoute ,private centerService: CenterService) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.centerService.getById(id).subscribe(
          (response) => {
            if (response.result) {
              this.center = response.result;
              const images = this.center.image ? [...this.center.image] : [null];
              let index_image = 0;
              images.forEach(image => {
                let img = image as Image;
                this.slides[index_image++] = {
                  src: environment.url+img.path,
                };
              });
              console.log(this.slides);
              
            }
          }
        );
      }
    });

  }
  

}
