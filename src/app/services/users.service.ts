import { Injectable } from '@angular/core';
import { Evaluator } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) { }


  authenticateUser(email: string, password: string) {
    return this.http.post(
      'http://127.0.0.1:5000/users/authenticate',
      { email, password }
      );
  }


  createEvaluator(evaluator: Evaluator) {
    return this.http.post(
      'http://127.0.0.1:5000/users/evaluator/register',
      evaluator
      );
  }
}
