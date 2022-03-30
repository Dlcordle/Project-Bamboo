import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { url } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

const userUrl=url+'/users'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  //constructor(private http: HttpClient) {}
  constructor() {}

  /*registerUser(user: User): Observable<User> {

    return this.http.post<User>(`${userUrl}/add`, user, this.httpOptions).pipe(catchError(this.handleError));
  }*/


  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      console.log('An error occured: ', httpError.error.message);
    }
    else {
      console.error(`
      Backend returned code ${httpError.status}
      body was ${httpError.error}`)
    }
    return throwError(() => new Error ('Something really bad happened. Please try again later'))
  }

}
