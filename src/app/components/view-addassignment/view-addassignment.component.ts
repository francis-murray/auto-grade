import { Component, OnInit } from "@angular/core";
import { GroupsService } from "../../services/groups.service";
import { Assignment } from "../../models/assignment.model";
import { AssignementsService } from "../../services/assignements.service";
import { MatDatepickerInputEvent, MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-view-addassignment",
  templateUrl: "./view-addassignment.component.html",
  styleUrls: ["./view-addassignment.component.css"]
})
export class ViewAddassignmentComponent implements OnInit {
  isFetching = false;
  date: number;
  group = {};
  assignment = {} as Assignment;
  selected: string = "";
  fileAssignment: File;
  ios: string;

  constructor(
    private groupsService: GroupsService,
    private assignementsService: AssignementsService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.groupsService.getallgroupEvaluator().subscribe(
      response => {
        console.log("dataFromServer: ", response);
        if (response.status === 0) {
          this.group = response.groups;
        }
        this.isFetching = false;
      },
      error => {
        this.isFetching = false;
        this.snackBar.open(error.error.error, "Close", {
          duration: 2000
        });
      }
    );
  }

  onFileselected(event) {
    console.log(event.target.files.item(0)); // We just print out data bubbled up from event emitter.
    this.fileAssignment = event.target.files.item(0);
  }

  addAssignment() {
    this.assignment.ios = [this.ios];
    console.log(this.date);
    console.log(this.selected);
    this.createAssignment(this.assignment, this.fileAssignment);
  }

  createAssignment(assignment: Assignment, file: File) {
    this.assignementsService.CreateAssignment(assignment, file).subscribe(
      response => {
        console.log("dataFromServer: ", response);
        this.isFetching = false;
        if (response.status == 0) {
          console.log(response.assign_id);
          console.log(this.selected);
          console.log(this.date);
          this.groupsService.putAssignmentToGroup(this.selected, response.assign_id, this.date).subscribe(response => {
            console.log(response);
          });
          this.snackBar.open("Assignment successfully added!", "Close", {
            duration: 2000
          });
          this.router.navigate(["/user-info"]);
        }
      },
      error => {
        console.log(error);
        this.isFetching = false;
        this.snackBar.open("Error, please try again", "Close", {
          duration: 2000
        });
      }
    );
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = event.value.getTime() / 1000;
  }
}
