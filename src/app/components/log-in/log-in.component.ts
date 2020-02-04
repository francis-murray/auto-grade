import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  isLoading = false;
  user = {} as User;
  errorMessage = "";

  constructor(private authService: AuthService, private userService: UsersService) {}

  ngOnInit() {}

  login(loginForm: NgForm) {
    if (!loginForm.valid) {
      console.log("Invalid Form");
      return;
    }

    this.isLoading = true;

    this.userService.authenticateUser(this.user.email, this.user.password).subscribe(
      response => {
        console.log("response", response);
        this.isLoading = false;
        if (response.status === 0) {
          this.authService.setUser(response);
        } else {
          this.errorMessage = "Invalid password. Please try again.";
        }
      },
      error => {
        console.error("error", error);
        this.isLoading = false;
        if (error.error.status === -2) {
          this.errorMessage = "This user doesn't exist";
        }
      }
    );
  }
}
