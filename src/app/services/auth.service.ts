import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError, Observable } from 'rxjs';
import { User, UserTypeEnum } from '../models/user.model';
import { tap, catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

// interface AuthResponseData {
//   status: number;
//   confirm_token: string;
// }


export interface LoginResponse {
  // status: number;
  auth_token: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   // API path
   basePath = 'http://127.0.0.1:5000/';


  // firstname: string = '';
  // lastname: string = '';
  // email: string = '';
  // password: string = '';
  // confirmed = false;
  // type: UserTypeEnum;
  // organisation: string = '';
  // user_id = '';


  constructor(private http: HttpClient, private router: Router) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

   // Http Options with TOKEN
   httpOptionsTOKEN = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': localStorage.getItem('auth_token')
    })
  };


  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occured:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      console.error('Backend returned code:', error.status);
      console.error('body was: ', error.error);
    }
    return throwError('Error. Please try again later');
  }

  // Verify user credentials on server to get token
  loginForm(email, password): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.basePath + 'users/authenticate', {email, password}, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // After login save token and other values (if any) in localStorage
  setUser(resp: LoginResponse) {
    // localStorage.setItem('status', resp.status);
    localStorage.setItem('auth_token', resp.auth_token);
    this.router.navigate(['/user-info']);
    console.log('SET USER: localStorage.getItem(\'auth_token\'): ', localStorage.getItem('auth_token'));
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

  getInfoUser() {
    console.log('localStorage.getItem(\'auth_token\'): ', localStorage.getItem('auth_token'));
    console.log('auth.service > this.httpOptionsTOKEN: ', this.httpOptionsTOKEN);
    return this.http.get(this.basePath + 'users/get/info', this.httpOptionsTOKEN);
  }
}

