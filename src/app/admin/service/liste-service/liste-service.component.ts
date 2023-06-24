import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-liste-service',
  templateUrl: './liste-service.component.html',
  styleUrls: ['./liste-service.component.scss']
})
export class ListeServiceComponent implements OnInit {
  public title: string;
  services: any[] = [];
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
          this.services = response.services;
        },
        (error) => {
          console.error('Error fetching services:', error);
        }
      );
    }
  }
