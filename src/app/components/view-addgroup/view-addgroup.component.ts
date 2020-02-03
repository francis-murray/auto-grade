import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {AuthService} from "../../services/auth.service";
import {UsersService} from "../../services/users.service";

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
          if (response === 0) {
            console.log("ajout reussis");
          }
        },
        error => {
          console.error(error);
        }
      );


  }

}
