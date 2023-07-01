import { Component , OnInit } from '@angular/core';
import { Center } from '../../../model/center';
import { Category } from '../../../model/category';
import { CenterService } from 'src/app/services/admin/center/center.service';
import { CategoryService } from 'src/app/services/admin/category/category.service';
import { ActivatedRoute } from '@angular/router';
import { cilCheck } from '@coreui/icons';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  icons = { cilCheck };
  public thiscenter: Center = new Center();
  public selectedFile: FileList; // Variable pour stocker le fichier sélectionné
  public loading: boolean;
  public messageIsUnread: boolean = false; 
  public messageIsError: boolean = false;
  public messageText: string;
  public addform: boolean = true;
  public categorys: Category[] = []; 

  constructor(
    private router: ActivatedRoute, 
    private categoryService: CategoryService,
    private centerService: CenterService
  ) { 
    this.loading = false;
    this.messageText = "";
  }

  ngOnInit() {
    
    this.router.params.subscribe(params => {
      const id = params['id']; 
      if(id){
        this.centerService.getById(id).subscribe(
          (response) => {
            if (response.result) {
              this.thiscenter = response.result;
              this.addform = false;
            }
          }
        );
      }
    });
    this.categoryService.getAll().subscribe(
      (response) => {
        if (response.result) {
          this.categorys = response.result as Category[];
        }
      }
    );
  }

  submitForm() {
    this.loading = true;
    if(this.addform){
      this.centerService.add(this.thiscenter,this.selectedFile).subscribe(
        (response) => {
          this.loading = false;
          if(response && response.error){
            this.messageIsError  = true;
            this.messageIsUnread  = false;
            this.messageText = response.error;
          }else{
            this.messageIsUnread  = true;
            this.messageIsError  = false;
            this.messageText = "Add Center successfully";
          }
          
        }
      )
    }else{
      this.centerService.update(this.thiscenter,this.selectedFile).subscribe(
        (response) => {
          this.loading = false;
          if(response && response.error){
            this.messageIsError  = true;
            this.messageIsUnread  = false;
            this.messageText = response.error;
          }else{
            this.messageIsUnread  = true;
            this.messageIsError  = false;
            this.messageText = "Update Center successfully";
          }
          
        }
      )
    }
    
  }

  onFileSelected(event: any) {
    // Gérer la sélection d'un fichier
    this.selectedFile = event.target.files;
    console.log(this.selectedFile); // Afficher le fichier sélectionné dans la console (à adapter selon vos besoins)
    // Vous pouvez envoyer le fichier au serveur ici ou effectuer d'autres actions nécessaires
  }
}
