import { Injectable } from '@angular/core';
import {Assignment} from '../models/assignment.model';
import {Evaluator} from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignement = {} as Assignment;

  constructor(private http: HttpClient) { }

  getAll(evaluator: Evaluator) {
    return this.http.post(
      'http://localhost:5000/assignments/evaluator/get/all ',
      evaluator
    );
  }
}
