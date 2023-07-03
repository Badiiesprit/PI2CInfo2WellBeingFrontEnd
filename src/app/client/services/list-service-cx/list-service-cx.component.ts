import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/model/service';
import { ServiceService } from 'src/app/services/service.service';
import { HttpClient } from '@angular/common/http';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/model/image';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-service-cx',
  templateUrl: './list-service-cx.component.html',
  styleUrls: ['./list-service-cx.component.scss']
})
export class ListServiceCxComponent implements OnInit {
  services: any[] = [];
  public motcle:string;
  public baseurl = environment.url;

  constructor(
    private serviceService: ServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private imageService: ImageService,
 ) {}

  ngOnInit() {

    this.serviceService.getAll().subscribe(
      (response) => {
        this.services = response.services;
      },
      (error) => {
        console.error('Error fetching services:', error);
      }
    );
  }



}
