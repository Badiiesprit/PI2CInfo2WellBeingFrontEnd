import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/model/service';

import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-liste-service',
  templateUrl: './liste-service.component.html',
  styleUrls: ['./liste-service.component.scss']
})
export class ListeServiceComponent implements OnInit {
  public title: string;
  list: any[] = [];
    motcle:string;

  constructor(
    private serviceService: ServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}



    ngOnInit() {
      this.title = 'My Shop App';

      this.serviceService.getAll().subscribe(
        (response) => {
          this.list = response.services;
        },
        (error) => {
          console.error('Error fetching services:', error);
        }
      );
    }


    deleteService(service: Service) {
      const i = this.list.indexOf(service);
      console.log("test");
      console.log(service);
      console.log(service._id);


      if (i !== -1) {
        this.serviceService.delete(service._id).subscribe(() => {
          this.list.splice(i, 1);
        }, (error) => {
          console.error(error);
        });
      }
    }




  }
