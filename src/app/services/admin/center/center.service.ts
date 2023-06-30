import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, catchError } from 'rxjs';
import { Center } from 'src/app/model/center';
@Injectable({
  providedIn: 'root'
})
export class CenterService {
  public url: string= environment.url+'/center/';
  public token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhmNWVhMDJhOGQ1YmI5YWEyNThlODgiLCJyb2xlIjpbXSwiaWF0IjoxNjg3MzkzNTExLCJleHAiOjUyODczODk5MTF9.iv1cyIm1gkbLmRp9QmJoya2-ZC8n56Spb9AaGVFl990";
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    // const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<Center []>(this.url+'getAll',{headers})
      .pipe(
        catchError((error: any) => {
          console.error('Une erreur s\'est produite lors de la récupération des services:', error);
          throw error; 
        })
      );
  }

  delete(id:string): Observable<any> {
    // const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.delete<Center []>(this.url+'delete/'+id,{headers})
      .pipe(
        catchError((error: any) => {
          console.error('Une erreur s\'est produite lors de la récupération des services:', error);
          throw error; 
        })
      );
  }

}
