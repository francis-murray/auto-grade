import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Group } from "../models/group.model";

//import { Observable } from "rxjs";

interface ResponseBody {
  status: number;
  groups: Array<Group>;
}

interface Responsestatus {
  status: number;
}

@Injectable({
  providedIn: "root"
})
export class GroupsService {
  apiBasePath = "http://127.0.0.1:5000";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "X-API-KEY": localStorage.getItem("auth_token")
    })
  };

  constructor(private http: HttpClient) {}

  createGroup(name: string) {
    return this.http.post(
      this.apiBasePath + "/groups/create",
      {
        name: name
      },
      this.httpOptions
    );
  }

  getallgroupEvaluator(): Observable<any> {
    return this.http.get(this.apiBasePath + "/groups/get/evaluator/all", this.httpOptions);
  }

  putAssignmentToGroup(groupename : string, assign_id : string, deadline : number): Observable<any>{
    return this.http.put(this.apiBasePath + "/groups/add/assignment" , {
      "group_name": groupename,
      "assignID": assign_id,
      "deadline": deadline
    },this.httpOptions)
  }
}
