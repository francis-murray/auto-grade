import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"]
})
export class UserInfoComponent implements OnInit {
  isLoading: boolean = false;

  dataFromServer: any = {
    status: 0,
    user_data: {
      firstname: "",
      lastname: "",
      email: "",
      type: "",
      created_timestamp: 0,
      groups: []
    }
  };

  isFetching = false;

  constructor(private authService: AuthService, private usersService: UsersService) {
    this.ngOnInit;
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.isLoading = true;
    this.usersService.getUserInfo().subscribe(response => {
      this.isLoading = false;
      this.dataFromServer = response;

      console.log("getUserInfo() dataFromServer: ", this.dataFromServer);
    });
  }

  logout() {
    this.authService.logout();
  }
}
