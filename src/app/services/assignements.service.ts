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

  CreateAssignment(assignment : Assignment, file : File){
    console.log(assignment.ios);

    const fd = new FormData();
    fd.append("test", file);
    console.log(fd);

    return this.http.post(
      this.apiBasePath + "/assignments/evaluator/create",
      {
        "name": "assignment.name",
        "description" : "assignment.description",
        "ios" : ["12 34 : 34"],
        "assignmentFile" : fd,
        "marking_scheme_file_size" : 12,
        "marking_scheme_cpu_time" : 12,
        "marking_scheme_memory_used" : 12
      },
      this.httpOptions
    );
  }
}
