import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {AssignementsService} from "../../services/assignements.service";

@Component({
  selector: 'app-view-score',
  templateUrl: './view-score.component.html',
  styleUrls: ['./view-score.component.css']
})
export class ViewScoreComponent implements OnInit {

  groupe = {}
  assignement = {};
  Exercice = {};
  groupeselect : string;

  private isSelected:string;

//in the component define a function
  setColor(value){
    this.isSelected=value;
  }

  constructor(private groupsService: GroupsService, private assignementsService: AssignementsService) { }

  ngOnInit() {
    this.groupsService.getallgroupCandidate().subscribe(
      response => {
        console.log("dataFromServer: ", response);
        if (response.status === 0) {
          this.groupe = response.groups;
        }
      },
      error => {
        console.error(error);
      }
    );
  }


  selectedcard($event){
    console.log(event.srcElement.id);
    this.Exercice = {};
    this.groupeselect = event.srcElement.id;
    this.groupsService.getassignmentscandidateOne(event.srcElement.id).subscribe(response => {
      console.log(response.group.assignments);
      this.Exercice = response.group.assignments;
    })
  }





}
