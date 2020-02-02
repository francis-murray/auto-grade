import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Subject, throwError, Observable } from "rxjs";
import { User, UserTypeEnum } from "../models/user.model";
import { tap, catchError, retry } from "rxjs/operators";
import { Router } from "@angular/router";

export interface AuthResponse {
  status: number;
  auth_token: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  // Http Options with TOKEN
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "X-API-KEY": localStorage.getItem("auth_token")
    })
  };

  // After login save token and other values (if any) in localStorage
  setUser(resp: AuthResponse) {
    localStorage.setItem("status", resp.status.toString());
    localStorage.setItem("auth_token", resp.auth_token);
    console.log("localstorage after setUser: ", localStorage);
    this.router.navigate(["/user-info"]).then(() => {
      window.location.reload();
    });
  }

  // check if token is set
  isLoggedIn() {
    return localStorage.getItem("auth_token") != null;
  }

  // clear localStorage and redirect to login screen
  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  /**
   * Error handler provided by Angular guide > HttpClient documentation
   * @param error error of type HttpErrorResponse
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
