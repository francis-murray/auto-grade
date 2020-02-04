import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Assignment } from "../models/assignment.model";
import { Observable } from "rxjs";
import { GlobalVariables } from "src/app/globals/globals";

interface ReturnType {
  status: number;
  assign_id: string;
}

@Injectable({
  providedIn: "root"
})
export class AssignementsService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      "X-API-KEY": localStorage.getItem("auth_token")
    })
  };

  CreateAssignment(assignment: Assignment, file: File): Observable<ReturnType> {
    console.log(file);

    const fd = new FormData();
    fd.append("name", assignment.name);
    fd.append("description", assignment.description);
    fd.append("ios", JSON.stringify(assignment.ios));
    fd.append("assignmentFile", file, file.name);
    fd.append("marking_scheme_file_size", assignment.marking_scheme_file_size);
    fd.append("marking_scheme_cpu_time", assignment.marking_scheme_cpu_time);
    fd.append("marking_scheme_memory_used", assignment.marking_scheme_memory_used);
    console.log(fd);

    return this.http.post<ReturnType>(
      GlobalVariables.API_ENDPOINT + "/assignments/evaluator/create",
      fd,
      this.httpOptions
    );
  }

  SoumissionAssignment(assignId: string, groupId: string, file: File): Observable<any> {
    console.log("Soumossion ... ");
    const fd = new FormData();
    fd.append("assignID", assignId);
    fd.append("groupID", groupId);
    fd.append("assignmentFile", file, file.name);

    return this.http.post(GlobalVariables.API_ENDPOINT + "/assignments/candidate/submit", fd, this.httpOptions);
  }
}
