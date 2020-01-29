import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  status: number;
  confirm_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}


  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'http://127.0.0.1:5000/users/authenticate',
      {
        email,
        password
      }
      );
  }


  signup(firstname: string, lastname: string, email: string, password: string, organisation: string) {
    return this.http.post<AuthResponseData>(
      'http://127.0.0.1:5000/users/evaluator/register',
      {
        firstname,
        lastname,
        email,
        password,
        organisation
      }
    );
  }
}
