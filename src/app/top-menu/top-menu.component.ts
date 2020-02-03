import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.css"]
})
export class TopMenuComponent implements OnInit {
  isLoggedInVar: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      console.log("this.authService.isLoggedIn()", this.authService.isLoggedIn());
      this.isLoggedInVar = true;
    }
    console.log("******** top-menu variables ********");
    console.log("*  this.authService.isLoggedIn()", this.authService.isLoggedIn());
    console.log("*  isLoggedInVar: ", this.isLoggedInVar);
    console.log("*  localStorage auth_token: ", localStorage.getItem("auth_token"));
    console.log("************************************");
  }

  logout() {
    this.authService.logout();
    this.isLoggedInVar = false;
  }
}
