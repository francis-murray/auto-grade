import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import {AuthResponse} from "./auth.service";

//import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  apiBasePath = "http://127.0.0.1:5000";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "X-API-KEY": localStorage.getItem("auth_token")
    })
  };

  constructor(private http: HttpClient) { }

  createGroup(name : string){
    return this.http.post(
      this.apiBasePath + "/groups/create",
      {
        "name": name
      },
      this.httpOptions
    );
  }

  getallgroupEvaluator(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(
      this.apiBasePath + "/groups/get/evaluator/all",
      this.httpOptions
    );
  }

  addstudenttogroup(name : string, email : string){
    return this.http.put<AuthResponse>(
      this.apiBasePath + "/groups/get/evaluator/all",{
        "name": name,
        "user_mail" : email
      },
    );


  }

}
