import { Component, OnInit } from '@angular/core';

export interface Groupe {
  value: string;
  viewValue: string;
}

export interface Assignment {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-submit-assignment',
  templateUrl: './submit-assignment.component.html',
  styleUrls: ['./submit-assignment.component.css']
})
export class SubmitAssignmentComponent implements OnInit {


  selectedGroup: string;

  Object = {}
  groupes: Groupe[] = [
  ];

  assignments: Assignment[] = [
  ];



  constructor() { }

  ngOnInit() {

  }

  onChange() {
    console.log("Sa marche");
    console.log(this.selectedGroup);


  }

}
