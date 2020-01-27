import { Injectable } from '@angular/core';
import { Evaluator } from '../models/users.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  createEvaluator(evaluator: Evaluator) {
    return this.http.post(
      'http://15.188.76.209/users/Eval/Register',
      evaluator
      );
  }
}
