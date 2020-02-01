import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError, Observable } from 'rxjs';
import { User, UserTypeEnum } from '../models/user.model';
import { tap, catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';


export interface LoginResponse {
  status: number;
  auth_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   // API path
   basePath = 'http://127.0.0.1:5000/';

  constructor(private http: HttpClient, private router: Router) { }

   // Http Options with TOKEN
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': localStorage.getItem('auth_token')
    })
  };


  // 2
  // Verify user credentials on server to get token
  loginForm(email, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.basePath + 'users/authenticate', {email, password})
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // After login save token and other values (if any) in localStorage
  setUser(resp: LoginResponse) {
    localStorage.setItem('status', resp.status.toString());
    localStorage.setItem('auth_token', resp.auth_token);
    console.log('localStorage: ', localStorage);
    this.router.navigate(['/user-info']);
  }

  // check if token is set
  isLoggedIn() {
    return localStorage.getItem('access_token') != null;
  }

  // clear localStorage and redirect to login screen
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  // getInfoUser() {
  //   console.log('localStorage: ', localStorage);
  //   console.log('localStorage.getItem(\'auth_token\'): ', localStorage.getItem('auth_token'));
  //   console.log('auth.service > this.httpOptions: ', this.httpOptions);
  //   return this.http.get(this.basePath + 'users/get/info', this.httpOptions);
  // }

  // Code copied from Angular guide, HttpClient documentation
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}

