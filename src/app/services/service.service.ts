import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Service } from '../model/service';
import { environment } from '../environments/environment';
import { Observable, catchError } from 'rxjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = environment.url + 'services/';
  constructor(private http: HttpClient  ) {}



  add(serviceData: Service ): Observable<any> {

    const formData: FormData = new FormData();

    for (const [key, value] of Object.entries(serviceData)) {
      if (key === 'date') {
        formData.append(key, new Date(value).toISOString()); // Convert date to ISO string
      } else {
        formData.append(key, value); // Convert other values to string
      }
    }


    return this.http.post<any>(this.url+"add",formData).pipe(
      catchError((error) => {
        console.error('Error adding service:', error);
        throw error;
      })
    );
  }

  delete(id: number) {
    return this.http.get(this.url+"delete/"+id);
  }

  getAll(): Observable<any> {
    return this.http.get<Service []>(this.url)
      .pipe(
        catchError((error: any) => {
          // Gérer l'erreur ici, par exemple, afficher un message d'erreur ou effectuer une autre action appropriée.
          console.error('Une erreur s\'est produite lors de la récupération des services:', error);
          throw error; // Lancer une exception pour interrompre le flux d'exécution si nécessaire.
        })
      );
  }

  searsh(id: number): Observable<Service> {
    return this.http.get<Service>(this.url + 'get/' + id).pipe(
      tap((response: Service) => {
        return response;
      }),
      catchError((error) => {
        console.error('Error retrieving service:', error);
        throw error;
      })
    );
  }

  update(service: Service): Observable<any> {
    const formData: FormData = new FormData();

    for (const [key, value] of Object.entries(service)) {
      if (key === 'date') {
        formData.append(key, new Date(value).toISOString()); // Convert date to ISO string
      } else {
        formData.append(key, value.toString()); // Convert other values to string
      }
    }

    return this.http.post<any>(this.url + 'update/' + service._id, formData).pipe(
      catchError((error) => {
        console.error('Error updating service:', error);
        throw error;
      })
    );
  }

  getServicesPage(page: number) {
    const url = `${this.url}/page?page=${page}`;
    return this.http.get(url);
  }

}
