import { Component } from '@angular/core';
import { CategoryService } from '../../../services/admin/category/category.service';

@Component({
  selector: 'app-category-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent {

  

  constructor(private categoryService: CategoryService) {
    categoryService.getCategorys().subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }
}
