import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.css"]
})
export class TopMenuComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
