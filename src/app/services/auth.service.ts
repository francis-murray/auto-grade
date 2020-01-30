import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError, Observable } from 'rxjs';
import { User, UserTypeEnum, LoginResponse } from '../models/user.model';
import { tap, catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

// interface AuthResponseData {
//   status: number;
//   confirm_token: string;
// }

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
    localStorage.setItem('name', resp.name);
    localStorage.setItem('access_token', resp.access_token);
    this.router.navigate(['/dashboard']);
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

  getData(data): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.basePath + 'users/view-assignment', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }









  // login(email: string, password: string) {
  //   return this.http.post<AuthResponseData>(
  //     this.basePath + 'users/authenticate',
  //     {
  //       email,
  //       password
  //     }
  //     ).pipe(
  //       tap(responseData => {
  //         this.handleAuthentication(
  //           this.firstname,
  //           this.lastname,
  //           email,
  //           password,
  //           this.confirmed,
  //           this.type,
  //           this.organisation,
  //           this.user_id,
  //           responseData.confirm_token
  //         )
  //       })
  //     );
  // }





  // signup(firstname: string, lastname: string, email: string, password: string, organisation: string) {
  //   return this.http.post<AuthResponseData>(
  //     this.basePath + 'users/evaluator/register',
  //     {
  //       firstname,
  //       lastname,
  //       email,
  //       password,
  //       organisation
  //     }
  //   ).pipe(
  //     tap(responseData => {
  //       this.handleAuthentication(
  //         firstname,
  //         lastname,
  //         email,
  //         password,
  //         this.confirmed,
  //         this.type,
  //         organisation,
  //         this.user_id,
  //         responseData.confirm_token
  //       )
  //     })
  //   );
  // }

//   private handleAuthentication(
//     firstname: string,
//     lastname: string,
//     email: string,
//     password: string,
//     confirmed: boolean,
//     type: UserTypeEnum,
//     organisation: string,
//     // tslint:disable-next-line: variable-name
//     user_id: string,
//     token: string
//     ) {
//     const user = new User(
//       firstname,
//       lastname,
//       email,
//       password,
//       confirmed,
//       type,
//       organisation,
//       user_id,
//       token
//     );
//     console.log(user);
//     this.user.next(user);
//   }
}

