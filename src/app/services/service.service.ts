import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../model/service';
import { environment } from '../environments/environment';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = environment.url + 'services/';
  constructor(private http: HttpClient) {}


  add(s: Service ) {
    return this.http.post(this.url,s);
  }

  delete(id: number) {
    return this.http.delete(this.url + id);
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

  // searsh(id: number) {
  //   return this.http.get<Staservicesge>(this.url + id);
  // }
  update(s:Service ){
    return this.http.put(this.url+s.id,s);
  }

  // updateLike(p:Stage){
  //   return this.http.put(this.url+p.id,p.nbrInteresse);
  // }
}


