import { Component, OnInit } from '@angular/core';
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
  public motcle: string;
  public baseurl = environment.url;
  filteredServices: any[] = [];
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 8; // Number of items to display per page
  sortOrder: string = 'asc'; // Sort order for date sorting


  constructor(
    private serviceService: ServiceService,
    private http: HttpClient,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.serviceService.getAll().subscribe(
      (response) => {
        this.services = response.services;
        this.filteredServices = this.services;
      },
      (error) => {
        console.error('Error fetching services:', error);
      }
    );
  }

  search(): void {
    if (this.motcle) {
      this.filteredServices = this.services.filter(service =>
        service.name.toLowerCase().includes(this.motcle.toLowerCase()) ||
        service.description.toLowerCase().includes(this.motcle.toLowerCase()) ||
        service.location.toLowerCase().includes(this.motcle.toLowerCase())
      );
    } else {
      this.filteredServices = this.services;
    }
    this.currentPage = 1; // Reset current page to 1 after search
  }

  get totalPages(): number {
    return Math.ceil(this.filteredServices.length / this.itemsPerPage);
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }




  sortServicesByDate(): void {
    let arrayToSort = this.services;

    if (this.motcle) {
      arrayToSort = this.filteredServices;
    }

    arrayToSort.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      if (this.sortOrder === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }

  getSortIconClass(): string {
    return this.sortOrder === 'asc' ? 'asc' : 'desc';
  }


}
