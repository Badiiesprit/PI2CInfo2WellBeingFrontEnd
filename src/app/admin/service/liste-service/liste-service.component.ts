import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/model/service';
import { ADTSettings } from 'angular-datatables/src/models/settings';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { ServiceService } from 'src/app/services/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-service',
  templateUrl: './liste-service.component.html',
  styleUrls: ['./liste-service.component.scss']
})
export class ListeServiceComponent implements OnInit {
   list:any[] = [];
    motcle:string;
    totalPages: number = 0;
    currentPage: number = 1;
    searchName: string = '';
    searchDescription: string = '';
    searchLocation: string = '';
    searchDate: string = '';

    sortField: string = '';
    sortOrder: string = '';

  constructor(
    private serviceService: ServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
 ) {}



    ngOnInit() {

      this.serviceService.getAll().subscribe(
        (response) => {
          this.list = response.services;
        },
        (error) => {
          console.error('Error fetching services:', error);
        }
      );
      this.getServicesPage(this.currentPage);

    }


    searchServices() {
      const searchData = {
        name: this.searchName,
        description: this.searchDescription,
        location: this.searchLocation,
        date: this.searchDate
      };

      this.http.post('http://localhost:5050/services/searchFilters', searchData).subscribe((response: any) => {
        this.list = response.services;
      });
    }

    sortServices() {
      const sortData = {
        field: this.sortField,
        order: this.sortOrder
      };

      this.http.post("http://localhost:5050/services/sort", sortData).subscribe((response: any) => {
        this.list = response.services;
      });
    }

    getServicesPage(page: number) {
      this.serviceService.getServicesPage(page).subscribe((response: any) => {
        this.list = response.services;
        this.totalPages = response.totalPages;
        this.currentPage = response.currentPage;
      });
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


    toggleService(service: Service) {
      console.log(service._id);
      this.http.get("http://localhost:5050/services/enable-disable/"+service._id).subscribe((response: any) => {
        if (response.disable !== undefined) {
          service.disable = response.disable;
        }
      });
    }

  }
