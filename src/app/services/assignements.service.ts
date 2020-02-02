import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Assignment} from "../models/assignment.model";

@Injectable({
  providedIn: 'root'
})
export class AssignementsService {

  apiBasePath = "http://127.0.0.1:5000";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "X-API-KEY": localStorage.getItem("auth_token")
    })
  };


  constructor(private http: HttpClient) { }

  CreateAssignment(assignment : Assignment){
    return this.http.post(
      this.apiBasePath + "/assignments/evaluator/create",
      {
        "name": assignment.name,
        "description" : assignment.description,
        "ios" : assignment.ios,
        "assignmentFile" : assignment.filename
      },
      this.httpOptions
    );
  }
}
