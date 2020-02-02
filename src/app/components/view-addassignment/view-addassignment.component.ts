import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../services/groups.service";

@Component({
  selector: 'app-view-addassignment',
  templateUrl: './view-addassignment.component.html',
  styleUrls: ['./view-addassignment.component.css']
})
export class ViewAddassignmentComponent implements OnInit {

  Groupe = {};

  constructor(private groupsService : GroupsService) { }

  ngOnInit() {
    console.log("getallgroupevaluator")
      this.groupsService.getallgroupEvaluator().subscribe(
      response => {
       /* if (response.status === 0) {
          console.log("succes");
          this.Groupe = response;
          console.log(this.Groupe);
        }*/
       console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }


}
