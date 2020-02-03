import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {Assignment} from "../../models/assignment.model";
import {AssignementsService} from "../../services/assignements.service";

@Component({
  selector: 'app-submit-assignment',
  templateUrl: './submit-assignment.component.html',
  styleUrls: ['./submit-assignment.component.css']
})
export class SubmitAssignmentComponent implements OnInit {

  group = {};
  exercices = {};
  groupselected : string;
  assignmentselected : string;
  fileAssignment: File;


  constructor(private groupsService: GroupsService ,  private assignementsService: AssignementsService) { }

  ngOnInit() {
    this.groupsService.getallgroupCandidate().subscribe(
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

  changegroup(){
    console.log(this.groupselected);
    this.groupsService.getassignmentscandidateOne(this.groupselected).subscribe(response => {
      console.log(response.group.assignments);
      this.exercices = response.group.assignments;
    })
  }

  changeexercice(){
    console.log(this.groupselected);
    console.log(this.assignmentselected);
  }

  onFileselected(event) {
    console.log(event.target.files.item(0)); // We just print out data bubbled up from event emitter.
    this.fileAssignment = event.target.files.item(0);
  }

  soumission(){
    console.log(this.groupselected);
    console.log(this.assignmentselected);
    console.log(this.fileAssignment);
    if(this.groupselected !== null && this.assignmentselected !== null && this.fileAssignment !== null){
      console.log("les champs OK");
      this.assignementsService.SoumissionAssignment(this.assignmentselected, this.groupselected,this.fileAssignment).subscribe(response => {
        if(response.status === 0){
          console.log("soumission reussis");
        }else{
          console.log("soumission KO");
        }
      })
    }else{
      console.log("un champs manquant");
    }

  }
}
