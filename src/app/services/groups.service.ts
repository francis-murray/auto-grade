import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }

  getAllGrouptoCandidate(){
    return this.http.get("http://localhost:5000/groups/get/evaluator/all\n", {
      headers: {
        X-API-KEY: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0ODc3NjgsImlhdCI6MTU4MDQwMTM2OCwic3ViIjoibW9oYW1tZWQuaWNob3VAaG90bWFpbC5mciJ9.SHWwrHfrhDpOvDyWHiMxMAKY9cQQTt8mr_TeyHBcmXk"
      }
    });
  }


}
