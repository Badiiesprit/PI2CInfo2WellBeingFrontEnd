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
  itemsPerPage: number = 8;
  currentPage: number = 1;
  filteredServices: Service[] = [];

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


  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  isMatched(service: Service, keyword: string): boolean {
    if (!keyword || keyword.trim() === '') {
      return true; // Show the card if the keyword is null or empty
    }

    keyword = keyword.toLowerCase().trim(); // Convert keyword to lowercase and remove leading/trailing whitespace

    // Check if any property of the service object contains the keyword
    if (
      service.name.toLowerCase().includes(keyword) ||
      service.description.toLowerCase().includes(keyword) ||
      service.location.toLowerCase().includes(keyword)
    ) {
      // Check if the current service should be displayed on the current page
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      const serviceIndex = this.services.indexOf(service);
      return serviceIndex >= startIndex && serviceIndex < endIndex;
    }

    return false;
  }


  search(): void {
    this.currentPage = 1; // Reset to the first page when performing a search
  }



}



