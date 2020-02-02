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
      "X-API-KEY": localStorage.getItem("auth_token")
    })
  };


  constructor(private http: HttpClient) { }

  CreateAssignment(assignment : Assignment, file : File){
    console.log(file);

    const fd = new FormData();
    fd.append("name", "assignname3");
    fd.append("description", "desc3");
    fd.append("ios", JSON.stringify(["ios : ios"]));
    fd.append("assignmentFile", file, file.name)
    fd.append("marking_scheme_file_size", "30");
    fd.append("marking_scheme_cpu_time", "20");
    fd.append("marking_scheme_memory_used", "50");
    console.log(fd);

    return this.http.post(
      this.apiBasePath + "/assignments/evaluator/create",
      fd,
      this.httpOptions
    );
  }
}
