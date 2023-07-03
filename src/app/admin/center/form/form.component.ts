import { Component , OnInit } from '@angular/core';
import { Center } from '../../../model/center';
import { Category } from '../../../model/category';
import { CenterService } from 'src/app/services/admin/center/center.service';
import { CategoryService } from 'src/app/services/admin/category/category.service';
import { ActivatedRoute } from '@angular/router';
import { cilCheck } from '@coreui/icons';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient,
    private router: ActivatedRoute, 
    private categoryService: CategoryService,
    private centerService: CenterService
  ) { 
    this.loading = false;
    this.messageText = "";
  }

  ngOnInit() {
    this.initializeMap();
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

  initializeMap() {
    const map = L.map('map').setView([51.505, -0.09], 13); // Set the initial center and zoom level
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; OpenStreetMap contributors',
    }).addTo(map);
  
    L.marker([36.8533107, 10.204613]).addTo(map)
      .bindPopup('A sample marker.')
      .openPopup();

    map.on('click', (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        
        this.getAddress(lat, lng).subscribe((data: any) => {
          const address = data.display_name;
          console.log('Address:', address);
          console.log('Latitude:', lat);
          console.log('Longitude:', lng);
          this.thiscenter.longitude = lng.toString();
          this.thiscenter.altitude = lat.toString();
          this.thiscenter.location = address;
        });
      });
  }

  getAddress(lat: number, lng: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
    return this.http.get(url);
  }
}
