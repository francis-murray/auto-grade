import { Component, OnInit } from "@angular/core";
import { GroupsService } from "../../services/groups.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-view-addgroup",
  templateUrl: "./view-addgroup.component.html",
  styleUrls: ["./view-addgroup.component.css"]
})
export class ViewAddgroupComponent implements OnInit {
  name: string = "";
  isFetching = false;

  constructor(private groupsService: GroupsService, private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {}

  addgroup() {
    console.log(this.name);
    this.groupsService.createGroup(this.name).subscribe(
      response => {
        this.isFetching = false;
        this.snackBar.open("Group " + this.name + " successfully created!", "Close", {
          duration: 2000
        });
        this.router.navigate(["/user-info"]);
      },
      error => {
        this.isFetching = false;
        this.snackBar.open(error.error.error, "Close", {
          duration: 2000
        });
        this.router.navigate(["/user-info"]);
      }
    );
  }
}
