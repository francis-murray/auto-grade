import { Injectable } from '@angular/core';
import { Evaluator, Candidate } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // API path
  basePath = 'http://127.0.0.1:5000';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': localStorage.getItem('auth_token')
    })
  };

  constructor(private http: HttpClient) { }


  // This route allow a user to have an API KEY that will allows him to do request
  // authenticateUser(email: string, password: string) {
  //   return this.http.post(
  //     this.basePath + /users/authenticate',
  //     { email, password }
  //     );
  // }



  /**
   * Register as a candidate after that the evaluator added the candidate
   * @param candidate candidate instance
   */
  registerCandidate(candidate: Candidate) {
    return this.http.put(
      this.basePath + '/users/candidate/confirmation/' + localStorage.getItem('auth_token'),
      candidate
      );
  }

  /**
   * Delete by a candidate to delete his current account
   */
  deleteCandidate() {
    // not implemented yet
  }

  /**
   * This methods adds a candidate to a group
   * @param mail_candidate mail of a candidate
   * @param group_name group of the candidate
   */
  addCandidate(mail_candidate: string, group_name: string) {
    return this.http.post(
      this.basePath + '/users/evaluator/add/candidate',
      {mail_candidate, group_name},
      );
  }

  /**
   * This route allows you to confirm an evaluator account
   */
  confirmEvaluator() {
    return this.http.put(
      this.basePath + '/users/evaluator/confirmation/' + localStorage.getItem('auth_token'),
      {}
      );
  }


  /**
   * Register as an evaluator
   * @param evaluator evaluator instance
   */
  registerEvaluator(evaluator: Evaluator) {
    return this.http.post(
      this.basePath + '/users/evaluator/register',
      evaluator,
      this.httpOptions
      );
  }


  /**
   * This route allow current user to retrieve his data, Evaluators and candidates can call this route
   */
  getUserInfo() {
    console.log('localStorage: ', localStorage);
    console.log('localStorage.getItem(\'auth_token\'): ', localStorage.getItem('auth_token'));
    console.log('auth.service > this.httpOptions: ', this.httpOptions);
    return this.http.get(this.basePath + 'users/get/info', this.httpOptions);
  }



  /**
   * Update those fields for a user, If there is no changes, you have to let them empty, otherwise it will be updated.
   * Evaluators and candidates can call it.
   * @param firstname User's first name
   * @param lastname Users's last name
   * @param organisation User's orgnanisation
   */
  updateUser(firstname: string, lastname: string, organisation: string) {
    return this.http.put(
      this.basePath + '/users/update',
      { firstname, lastname, organisation },
      this.httpOptions
      );
  }




}
