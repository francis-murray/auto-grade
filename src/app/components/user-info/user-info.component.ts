import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { UsersService } from "src/app/services/users.service";
import { UsersResolverService } from "src/app/services/users-resolver.service";
import { ActivatedRoute, Data } from "@angular/router";

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

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private usersResolverService: UsersResolverService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.data.subscribe((data: Data) => {
      this.isLoading = false;
      console.log("Data :", data["user"]);
      this.dataFromServer = data["user"];
    });
  }

  logout() {
    this.authService.logout();
  }
}
