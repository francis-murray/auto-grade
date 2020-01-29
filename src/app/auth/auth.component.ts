import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;

  user = {} as User;

  constructor(private authService: AuthService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }


  onSubmit(form: NgForm) {
    console.log(form.value);
    if (!form.valid) {
      return;
    }

    const firstname = '';
    const lastname = '';
    const email = form.value.email;
    const password = form.value.password;
    const organisation = '';

    this.isLoading = true;

    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe(
        responseData => {
          console.log(responseData);
          this.isLoading = false;
          this.snackBar.open('Successful Login', 'Close', {
            duration: 2000,
          });
        },
        error => {
          console.log(error);
          this.isLoading = false;
          this.snackBar.open(error.error.error, 'Close', {
            duration: 2000,
          });
        }
      );
    } else {
      this.authService.signup(firstname, lastname, email, password, organisation).subscribe(
        responseData => {
          console.log(responseData);
          this.isLoading = false;
          this.snackBar.open('Successful Registration', 'Close', {
            duration: 2000,
          });
        },
        error => {
          console.log(error);
          this.isLoading = false;
          this.snackBar.open(error.error.error, 'Close', {
            duration: 2000,
          });
        }
      );
    }

    form.reset();
  }

}
