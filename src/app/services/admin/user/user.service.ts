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

  add(user: User) {
    return this.http.post<User>(`${this.url}addUser`, user);
  }

  delete(id: number) {
    return this.http.delete(this.url + id);
  }

  disableUser(userId: number) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDdlNWY3NTMzZDk1MmIxN2FhNjVmN2IiLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY4NzM5MDIzMiwiZXhwIjo1Mjg3Mzg2NjMyfQ.ks38C-kMjbBCMWUyJlsCXsvRBVhRx1IdQJaZEpnrl4Y"
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.url}delete/${userId}`;
    return this.http.delete(url, { headers });  }
    

  get(): Observable<any[]> {
    // const token = localStorage.getItem('token');
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDdlNWY3NTMzZDk1MmIxN2FhNjVmN2IiLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY4NzM5MDIzMiwiZXhwIjo1Mjg3Mzg2NjMyfQ.ks38C-kMjbBCMWUyJlsCXsvRBVhRx1IdQJaZEpnrl4Y"
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any[]>(`${this.url}get`, { headers });
  }

// getById(userId:string){
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDdlNWY3NTMzZDk1MmIxN2FhNjVmN2IiLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY4NzM5MDIzMiwiZXhwIjo1Mjg3Mzg2NjMyfQ.ks38C-kMjbBCMWUyJlsCXsvRBVhRx1IdQJaZEpnrl4Y"
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
//     return this.http.get<any[]>(`${this.url}get/${userId}`, { headers });

// }

getById(id:string): Observable<any> {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDdlNWY3NTMzZDk1MmIxN2FhNjVmN2IiLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY4NzM5MDIzMiwiZXhwIjo1Mjg3Mzg2NjMyfQ.ks38C-kMjbBCMWUyJlsCXsvRBVhRx1IdQJaZEpnrl4Y"
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get<User []>(this.url+'get/'+id, { headers })
    .pipe(
      catchError((error: any) => {
        console.error('Une erreur s\'est produite lors de la récupération des services:', error);
        throw error;
      })
    );
}
  update(id:String, u: User) {
    console.log(id)
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDdlNWY3NTMzZDk1MmIxN2FhNjVmN2IiLCJyb2xlIjpbImFkbWluIl0sImlhdCI6MTY4NzM5MDIzMiwiZXhwIjo1Mjg3Mzg2NjMyfQ.ks38C-kMjbBCMWUyJlsCXsvRBVhRx1IdQJaZEpnrl4Y";
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.put(this.url+`update/`+id, u , { headers });
  }

  search(id:number){
    return this.http.get<User>(this.url+id)
  }
}
