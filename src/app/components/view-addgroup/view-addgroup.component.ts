import { Component, OnInit } from '@angular/core';
import {Group} from "../../models/group.model";
import {GroupsService} from "../../services/groups.service";

@Component({
  selector: 'app-view-addgroup',
  templateUrl: './view-addgroup.component.html',
  styleUrls: ['./view-addgroup.component.css']
})
export class ViewAddgroupComponent implements OnInit {

  name : string = "";

  constructor(
    private  groupsService: GroupsService
  ) { }

  ngOnInit() {
  }


  addgroup(){
    console.log(this.name);
      this.groupsService.createGroup(this.name).subscribe(
        response => {
          if (response.status === 0) {
            console.log("ajout reussis");
          }
        },
        error => {
          console.error(error);
        }
      );


  }

}
