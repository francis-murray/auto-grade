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

  // test push
  constructor(private http: HttpClient) { }

  CreateAssignment(assignment : Assignment, file : File){
    console.log(file);

    const fd = new FormData();
    fd.append("name", assignment.name);
    fd.append("description", assignment.description);
    fd.append("ios", JSON.stringify(assignment.ios));
    fd.append("assignmentFile", file, file.name)
    fd.append("marking_scheme_file_size", assignment.marking_scheme_file_size);
    fd.append("marking_scheme_cpu_time", assignment.marking_scheme_cpu_time);
    fd.append("marking_scheme_memory_used", assignment.marking_scheme_memory_used);
    console.log(fd);

    return this.http.post(
      this.apiBasePath + "/assignments/evaluator/create",
      fd,
      this.httpOptions
    );
  }
}
