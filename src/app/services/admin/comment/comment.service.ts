import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Comment } from '../../../model/comment';
import { environment } from '../../../environments/environment';
import { Observable, catchError } from 'rxjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = environment.url + 'comments/';
  constructor(private http: HttpClient  ) {}



  delete(id: string) {
    return this.http.get(this.url+"delete/"+id);
  }

  getAll(): Observable<any> {
    return this.http.get<Comment []>(this.url)
      .pipe(
        catchError((error: any) => {
          console.error('Une erreur s\'est produite lors de la récupération des commentaires:', error);
          throw error;
        })
      );
  }

  searsh(id: string): Observable<Comment> {
    return this.http.get<Comment>(this.url + 'get/' + id).pipe(
      tap((response: Comment) => {
        return response;
      }),
      catchError((error) => {
        console.error('Error retrieving service:', error);
        throw error;
      })
    );
  }
}
