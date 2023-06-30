import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/category';
import { CategoryService } from 'src/app/services/admin/category/category.service';
import { Router } from '@angular/router';
import { cilCheck } from '@coreui/icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  icons = { cilCheck };

  public thiscategory: Category = new Category();
  public selectedFile: File | null = null; // Variable pour stocker le fichier sélectionné
  public loading: boolean;
  public messageIsUnread: boolean = false; 
  public messageIsError: boolean = false;
  public messageText: string;
  
  category_parent: Category[] = []; 

  constructor(private router: Router, private categoryService: CategoryService) { 
    this.loading = false;
    this.messageText = "";
    let category: Category = new Category();
    category.title = "Not parent";
    this.category_parent.push(category);
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      (response) => {
        if (response.result) {
          let array: Category[] = response.result as Category[];
          array.forEach((category) => {
            if(!category.parent){
              this.category_parent.push(category);
            }
          });
        }
      }
    );
  }

  submitForm() {
    this.loading = true;
    if(this.selectedFile){
      this.thiscategory.images = this.selectedFile;
    }
    this.categoryService.addCategory(this.thiscategory).subscribe(
      (response) => {
        this.loading = false;
        if(response && response.error){
          this.messageIsError  = true;
          this.messageIsUnread  = false;
          this.messageText = response.error;
        }else{
          this.messageIsUnread  = true;
          this.messageIsError  = false;
          this.messageText = "add ssss";
        }
        
      }
    )
  }

  onFileSelected(event: any) {
    // Gérer la sélection d'un fichier
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile); // Afficher le fichier sélectionné dans la console (à adapter selon vos besoins)
    // Vous pouvez envoyer le fichier au serveur ici ou effectuer d'autres actions nécessaires
  }
}
