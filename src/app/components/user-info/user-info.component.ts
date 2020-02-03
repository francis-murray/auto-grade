import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { Evaluator } from "@angular/compiler-cli/src/metadata/evaluator";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"]
})
export class UserInfoComponent implements OnInit {
  isLoading: boolean = false;
  createdDate: Date;
  isFetching = false;

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

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.isLoading = true;
    this.usersService.getUserInfo().subscribe(data => {
      this.isLoading = false;
      this.dataFromServer = data;
      this.createdDate = new Date(this.dataFromServer.user_data.created_timestamp * 1000);

      console.log("dataFromServer", this.dataFromServer);
    }),
      error => {
        this.isLoading = false;
        console.log(error);
      };
  }
}
