import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public url: string= environment.url+'category/';

  constructor(private http: HttpClient) {
  }

  getCategorys(){
    return this.http.get(this.url+'get')
  }

}
