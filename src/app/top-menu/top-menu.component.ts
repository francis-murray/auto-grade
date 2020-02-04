import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { UsersService } from "../services/users.service";
import { MatMenuModule } from "@angular/material/menu";

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.css"]
})
export class TopMenuComponent implements OnInit {
  isLoggedInVar: boolean = false;

  constructor(private authService: AuthService, private usersService: UsersService) {}

  dataFromServer: any = {
    status: 0,
    user_data: {
      firstname: "",
      lastname: "",
      email: "",
      type: "",
      created_timestamp: 0,
      organisation: "",
      corrected_programs_left: 0,
      groups: [],
      assignmentsCreated: []
    }
  };

  userType = "";

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      console.log("this.authService.isLoggedIn()", this.authService.isLoggedIn());
      this.isLoggedInVar = true;

      this.usersService.getUserInfo().subscribe(data => {
        console.log("data top menu: ", data);
        this.dataFromServer = data;
        this.userType = this.dataFromServer.user_data.type;
        console.log("this.userType", this.userType);
      });
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
