import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user.model";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  user = {} as User;

  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {}

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.userService
      .authenticateUser(this.user.email, this.user.password)
      .subscribe(
        response => {
          if (response.status === 0) {
            this.authService.setUser(response);
          }
        },
        error => {
          console.error(error);
        }
      );
  }
}
