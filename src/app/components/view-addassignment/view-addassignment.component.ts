import { Component, OnInit } from "@angular/core";
import { GroupsService } from "../../services/groups.service";
import { Assignment } from "../../models/assignment.model";
import { AssignementsService } from "../../services/assignements.service";

@Component({
  selector: "app-view-addassignment",
  templateUrl: "./view-addassignment.component.html",
  styleUrls: ["./view-addassignment.component.css"]
})
export class ViewAddassignmentComponent implements OnInit {
  group = {};
  assignment = {} as Assignment;
  selected: string = "";
  fileAssignment: File;
  ios: string;

  constructor(private groupsService: GroupsService, private assignementsService: AssignementsService) {}

  ngOnInit() {
    this.groupsService.getallgroupEvaluator().subscribe(
      response => {
        console.log("dataFromServer: ", response);
        if (response.status === 0) {
          this.group = response.groups;
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  onFileselected(event) {
    console.log(event.target.files.item(0)); // We just print out data bubbled up from event emitter.
    this.fileAssignment = event.target.files.item(0);
  }

  addAssignment() {
    this.assignment.ios = [this.ios];
    this.createAssignment(this.assignment, this.fileAssignment);
  }

  createAssignment(assignment: Assignment, file: File) {
    this.assignementsService.CreateAssignment(assignment, file).subscribe(response => {
      console.log("dataFromServer: ", response);
    });
  }
}
