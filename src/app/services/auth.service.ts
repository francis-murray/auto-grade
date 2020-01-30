import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { User, UserTypeEnum } from '../models/user.model';
import { tap } from 'rxjs/operators';

interface AuthResponseData {
  status: number;
  confirm_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   // API path
   basePath = 'http://127.0.0.1:5000/';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  confirmed = false;
  type: UserTypeEnum;
  organisation: string = '';
  user_id = '';


  user = new Subject<User>();

  constructor(private http: HttpClient) {}


  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      this.basePath + 'users/authenticate',
      {
        email,
        password
      }
      ).pipe(
        tap(responseData => {
          this.handleAuthentication(
            this.firstname,
            this.lastname,
            email,
            password,
            this.confirmed,
            this.type,
            this.organisation,
            this.user_id,
            responseData.confirm_token
          )
        })
      );
  }





  signup(firstname: string, lastname: string, email: string, password: string, organisation: string) {
    return this.http.post<AuthResponseData>(
      this.basePath + 'users/evaluator/register',
      {
        firstname,
        lastname,
        email,
        password,
        organisation
      }
    ).pipe(
      tap(responseData => {
        this.handleAuthentication(
          firstname,
          lastname,
          email,
          password,
          this.confirmed,
          this.type,
          organisation,
          this.user_id,
          responseData.confirm_token
        )
      })
    );
  }

  private handleAuthentication(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    confirmed: boolean,
    type: UserTypeEnum,
    organisation: string,
    // tslint:disable-next-line: variable-name
    user_id: string,
    token: string
    ) {
    const user = new User(
      firstname,
      lastname,
      email,
      password,
      confirmed,
      type,
      organisation,
      user_id,
      token
    );
    console.log(user);
    this.user.next(user);
  }
}

