import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {AuthService} from "../../services/auth.service";
import {UsersService} from "../../services/users.service";
import {AssignementsService} from "../../services/assignements.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-view-addcandidate',
  templateUrl: './view-addcandidate.component.html',
  styleUrls: ['./view-addcandidate.component.css']
})
export class ViewAddcandidateComponent implements OnInit {

  Groupe = {};
  selected : string = "";
  email : string = "";

  constructor(private groupsService : GroupsService,
              private authService: AuthService,
              private usersService: UsersService,
              private assignementsService : AssignementsService,
              private http : HttpClient) { }

  ngOnInit() {
    this.groupsService.getallgroupEvaluator().subscribe(response => {
      console.log("dataFromServer: ", response);
      if(response.status === 0){
        this.Groupe = response.groups;
        console.log(this.Groupe);
      }
    });
  }

  addCandidate(){
      console.log(this.selected);
      console.log(this.email);
      this.groupsService.addstudenttogroup(this.selected,this.email).subscribe(response => {
        if(response.status === 0){
          console.log("ajout reussis");
        }
      })
  }

}
