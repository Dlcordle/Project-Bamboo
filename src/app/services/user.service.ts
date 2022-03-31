import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { url } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

const userUrl = url + '/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  httpOptions = {headers:this.reqHeader, responseType: 'text'}


  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<string> {
    console.log(user);
    console.log(`${userUrl}/add`);
   // bob: Observable<User> =
    return this.http.post(`${userUrl}/add`, user , {headers:this.reqHeader, responseType: 'text'} ).pipe(catchError(this.handleError));
  }

  loginUser(user: User): Observable<string> {
    return this.http.post(`${userUrl}/login`, user,  {headers:this.reqHeader, responseType: 'text'}).pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
   // try {
    if (httpError.error instanceof ErrorEvent) {
      console.log('An error occured: ', httpError.error.message);
    }
    else if (httpError.status==200) {
      //  catch{
      console.log(httpError.message);
      console.log(httpError);
    }
    else {
      console.error(`
      Backend returned code ${httpError.status}
      body was ${httpError.error}`)
    }
    return throwError(() => new Error ('Something really bad happened. Please try again later'))
  }

}
