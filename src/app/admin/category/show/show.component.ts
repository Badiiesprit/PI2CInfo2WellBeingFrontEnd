import { Component } from '@angular/core';
import { Category } from '../../../model/category';
import { CategoryService } from 'src/app/services/admin/category/category.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {

  public category:Category;
  public baseurl = environment.url;

  constructor(private route:ActivatedRoute ,private categoryService: CategoryService) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id']; 
      if(id){
        this.categoryService.getById(id).subscribe(
          (response) => {
            if (response.result) {
              this.category = response.result;
            }
          }
        );
      }
    });
    
  }

}
