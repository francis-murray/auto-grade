import { Component, OnInit } from '@angular/core';
import {GroupsService} from "../../services/groups.service";
import {AuthService} from "../../services/auth.service";
import {UsersService} from "../../services/users.service";
import {Assignment} from "../../models/assignment.model";
import {AssignementsService} from "../../services/assignements.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-view-addassignment',
  templateUrl: './view-addassignment.component.html',
  styleUrls: ['./view-addassignment.component.css']
})
export class ViewAddassignmentComponent implements OnInit {

  Groupe = {};
  assignment = {} as Assignment;
  selected : string = "";
  fileassignment : File;

  constructor(private groupsService : GroupsService,
              private authService: AuthService,
              private usersService: UsersService,
              private assignementsService : AssignementsService,
              private http : HttpClient
  ) { }

  ngOnInit() {
    console.log("getUserInfo()... ");
    this.groupsService.getallgroupEvaluator().subscribe(response => {
      console.log("dataFromServer: ", response);
      if(response.status === 0){
          this.Groupe = response.groups;
      }
    });
  }

  onFileselected(event) {
    console.log("test input file");
    console.log(event.target.files.item(0)); // We just print out data bubbled up from event emitter.
    this.fileassignment = event.target.files.item(0);
  }

  addassignment(){
    console.log("add assignment ...");
    console.log(this.selected);
    console.log(this.fileassignment);
    this.assignment.ios = ["3 : 12"];
    console.log(this.assignment.marking_scheme_file_size);
    console.log(this.assignment.marking_scheme_cpu_time);
    console.log(this.assignment.marking_scheme_memory_used);


    this.createAssignment(this.assignment, this.fileassignment);

  }

  createAssignment(assignment : Assignment , file : File){
    this.assignementsService.CreateAssignment(assignment,file).subscribe(response => {
      console.log("dataFromServer: ", response);
    });
  }




}
