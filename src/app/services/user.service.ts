import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { url } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

const userUrl = url + '/users';
const googleDriveUrl = url + '/googledrive'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${userUrl}/add`, user, this.httpOptions).pipe(catchError(this.handleError));
  }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(`${userUrl}/login`, user, this.httpOptions).pipe(catchError(this.handleError));
  }

  setGoogleDriveInitSetup(): Observable<File> 
  {
    return this.http.get<File>(`${googleDriveUrl}/`, this.httpOptions);
  }

  setGoogleDriveUserSetup(): Observable<File> 
  {
    return this.http.get<File>(`${googleDriveUrl}/googlesignin`, this.httpOptions);
  }

  // setGoogleOathSetup(): Observable<File> 
  // {
  //   return this.http.get<File>(`${googleDriveUrl}/oath`, this.httpOptions);
  // }

  createGoogleDriveFile(): Observable<File> 
  {
    var file:File = new File([],"");
    var obj = this.http.post<File>(`${googleDriveUrl}/create`, file, this.httpOptions);
    console.log("Made it to createGoogleDriveFile, obj is: "+ obj);
    return obj;
  }

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
