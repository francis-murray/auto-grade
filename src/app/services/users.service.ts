import { Injectable } from '@angular/core';
import { Evaluator } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // API path
  basePath = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }


  // authenticateUser(email: string, password: string) {
  //   return this.http.post(
  //     this.basePath + /users/authenticate',
  //     { email, password }
  //     );
  // }


  createEvaluator(evaluator: Evaluator) {
    return this.http.post(
      this.basePath + '/users/evaluator/register',
      evaluator
      );
  }
}
