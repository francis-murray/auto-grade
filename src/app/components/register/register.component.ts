import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponse } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  roles: any = ["Evaluator", "Candidate"];
  user = {} as User;
  selectedRole: string;
  dataFromServer: any;

  isLoading = false;

  constructor(
    private usersService: UsersService,
    private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onUserRegister(registerForm: NgForm) {
    if (!registerForm.valid) {
      console.log("Invalid Form");
      return;
    }

    if (this.selectedRole === "Candidate") {
      this.isLoading = true;
      this.usersService
        .registerCandidate(
          this.user.firstname,
          this.user.lastname,
          this.user.email,
          this.user.password,
          this.user.organisation
        )
        .subscribe(
          responseData => {
            this.isLoading = false;
            console.log(responseData);
            this.snackBar.open("Successful Registration!", "Close", {
              duration: 2000
            });
            this.dataFromServer = responseData;
            this.authService.setUser(this.dataFromServer);
          },
          error => {
            this.isLoading = false;
            if (error.status != 0) {
              this.snackBar.open(error.error.error, "Close", {
                duration: 2000
              });
            } else {
              this.snackBar.open("Error connecting to the server. Please try again later.", "Close", {
                duration: 2000
              });
            }
          }
        );
    } else if (this.selectedRole === "Evaluator") {
      this.isLoading = true;
      this.usersService
        .registerEvaluator(
          this.user.firstname,
          this.user.lastname,
          this.user.email,
          this.user.password,
          this.user.organisation
        )
        .subscribe(
          responseData => {
            this.isLoading = false;
            console.log(responseData);
            this.snackBar.open("Successful Registration!", "Close", {
              duration: 2000
            });
            this.dataFromServer = responseData;
            this.authService.setUser(this.dataFromServer);
          },
          error => {
            this.isLoading = false;
            if (error.status != 0) {
              this.snackBar.open(error.error.error, "Close", {
                duration: 2000
              });
            } else {
              this.snackBar.open("Error connecting to the server. Please try again later.", "Close", {
                duration: 2000
              });
            }
          }
        );
    } else {
      this.snackBar.open("Please select a role", "Close", {
        duration: 2000
      });
    }
  }
}
