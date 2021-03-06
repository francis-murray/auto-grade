import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthResponse } from "./auth.service";
import { GlobalVariables } from "../globals/globals";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "X-API-KEY": localStorage.getItem("auth_token")
    })
  };

  constructor(private http: HttpClient) {}

  /**
   * Function that sends a POST request to the api and returns an response containing
   * a status code and an API KEY, which will allow the user to perform secured requests
   * @param email user's email
   * @param password user's password
   */
  authenticateUser(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(GlobalVariables.API_ENDPOINT + "/users/authenticate", {
      email: email,
      password: password
    });
  }

  /**
   * This methods adds a candidate to a group. Requires an authentication token.
   * @param mail_candidate mail of a candidate
   * @param group_name group of the candidate
   */
  addCandidate(mailCandidate: string, groupName: string) {
    return this.http.post(
      GlobalVariables.API_ENDPOINT + "/users/evaluator/add/candidate",
      {
        mail_candidate: mailCandidate,
        group_name: groupName
      },
      this.httpOptions
    );
  }

  /**
   * This route allows you to confirm an evaluator account
   */
  confirmEvaluator() {
    return this.http.put(
      GlobalVariables.API_ENDPOINT + "/users/evaluator/confirmation/" + localStorage.getItem("auth_token"),
      {}
    );
  }

  /**
   * Register as an evaluator
   * @param firstName of evaluator
   * @param lastName of evaluator
   * @param email of evaluator
   * @param password of evaluator
   * @param organisation of evaluator
   */
  registerEvaluator(firstName: string, lastName: string, email: string, password: string, organisation: string) {
    return this.http.post(GlobalVariables.API_ENDPOINT + "/users/evaluator/register", {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      organisation: organisation
    });
  }

  /**
   * Register as a candidate
   * @param firstName of candidate
   * @param lastName of candidate
   * @param email of candidate
   * @param password of candidate
   * @param organisation of candidate
   */
  registerCandidate(firstName: string, lastName: string, email: string, password: string, organisation: string) {
    return this.http.post(GlobalVariables.API_ENDPOINT + "/users/candidate/register", {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      organisation: organisation
    });
  }

  /**
   * This route allow current user to retrieve his data, Evaluators and candidates can call this route.
   * Requires an authentication token.
   */
  getUserInfo(): Observable<any> {
    return this.http.get(GlobalVariables.API_ENDPOINT + "/users/get/info", this.httpOptions);
  }

  /**
   * Update those fields for a user, If there is no changes, you have to let them empty, otherwise it will be updated.
   * Evaluators and candidates can call it. Requires an authentication token.
   * @param firstname User's first name
   * @param lastname Users's last name
   * @param organisation User's orgnanisation
   */
  updateUser(firstname: string, lastname: string, organisation: string) {
    return this.http.put(
      GlobalVariables.API_ENDPOINT + "/users/update",
      { firstname, lastname, organisation },
      this.httpOptions
    );
  }

  /**
   * Delete by a candidate to delete his current account. Requires an authentication token.
   */
  deleteCandidate() {
    // not implemented yet
  }

  /** Valide transaction Paypal **/

  validetrans(order_id: string): Observable<any> {
    return this.http.post(
      "http://15.188.76.209/users/evaluator/validate_trans",
      {
        token_id: order_id
      },
      this.httpOptions
    );
  }

  validetranspremium(order_id: string): Observable<any> {
    return this.http.post(
      "http://15.188.76.209/users/evaluator/validate_premium",
      {
        order_id: order_id
      },
      this.httpOptions
    );
  }
}
