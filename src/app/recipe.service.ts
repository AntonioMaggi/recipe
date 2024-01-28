import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }
 
  getRecipes(): Observable<any> {
     return this.http.get(`${this.apiUrl}/Recipe`).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(error);
      })
   );
  }
}