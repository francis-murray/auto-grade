import { Component, OnInit } from "@angular/core";
import { Evaluator, User } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  roles: any = ["Evaluator", "Candidate"];
  user = {} as User;
  selectedRole: string;

  isFetching = false;

  constructor(private usersService: UsersService, private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {}

  onUserRegister() {
    this.isFetching = true;
    if (this.selectedRole === "Candidate") {
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
            this.isFetching = false;
            console.log(responseData);
            this.snackBar.open("Successful Registration! Please sign in", "Close", {
              duration: 2000
            });
            this.router.navigate(["/login"]);
          },
          error => {
            this.isFetching = false;
            this.snackBar.open(error.error.error, "Close", {
              duration: 2000
            });
            console.log(error);
          }
        );
    } else if (this.selectedRole === "Evaluator") {
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
            this.isFetching = false;
            console.log(responseData);
            this.snackBar.open("Successful Registration! Please sign in", "Close", {
              duration: 2000
            });
            this.router.navigate(["/login"]);
          },
          error => {
            this.isFetching = false;
            this.snackBar.open(error.error.error, "Close", {
              duration: 2000
            });
            console.log(error);
          }
        );
    }
  }
}
