import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../../model/user';
import { environment } from '../../../environments/environment';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.url+'user/';
  constructor(private http: HttpClient) {}

  add(u: User) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDdlNWY3NTMzZDk1MmIxN2FhNjVmN2IiLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY4NzM5MDIzMiwiZXhwIjo1Mjg3Mzg2NjMyfQ.ks38C-kMjbBCMWUyJlsCXsvRBVhRx1IdQJaZEpnrl4Y";
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.url}add`, u, { headers });
  }

  delete(id: number) {
    return this.http.delete(this.url + id);
  }

  get(): Observable<any[]> {
    // const token = localStorage.getItem('token');
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDdlNWY3NTMzZDk1MmIxN2FhNjVmN2IiLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY4NzM5MDIzMiwiZXhwIjo1Mjg3Mzg2NjMyfQ.ks38C-kMjbBCMWUyJlsCXsvRBVhRx1IdQJaZEpnrl4Y"
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.url}get`, { headers });
  }

  update(u: User) {
    return this.http.put(this.url + u.id, u);
  }
}
