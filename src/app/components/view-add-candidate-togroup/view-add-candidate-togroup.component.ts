import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../services/groups.service";

@Component({
  selector: 'app-view-add-candidate-togroup',
  templateUrl: './view-add-candidate-togroup.component.html',
  styleUrls: ['./view-add-candidate-togroup.component.css']
})
export class ViewAddCandidateTogroupComponent implements OnInit {

  email : string = "";
  selected : string;
  group = {};

  constructor(private groupsService: GroupsService) { }

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

  Addcandidate(){
    console.log(this.selected);
    console.log(this.email);
    this.groupsService.putCandidatetoGroup(this.selected, this.email).subscribe(response=>{
      if(response.status === 0) {
        console.log("success");
      }else{
        console.log("error");
      }
    })

  }

}
