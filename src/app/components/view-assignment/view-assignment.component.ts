import { Component, OnInit } from "@angular/core";
import { AssignementsService } from "src/app/services/assignements.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-view-assignment",
  templateUrl: "./view-assignment.component.html",
  styleUrls: ["./view-assignment.component.css"]
})
export class ViewAssignmentComponent implements OnInit {
  isLoading = false;
  listOfAssignments: [];

  constructor(private assignmentServices: AssignementsService, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.assignmentServices.getAllAssignmentsPerEvaluator().subscribe(
      responseData => {
        this.isLoading = false;
        console.log(responseData);
        this.listOfAssignments = responseData.assignments;
      },
      error => {
        this.isLoading = false;
        this.snackBar.open(error.error.error, "Close", { duration: 2000 });
      }
    );
  }
}
