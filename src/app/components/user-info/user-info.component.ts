import { Component, OnInit } from '@angular/core';
import { Evaluator } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {


  roles: any = ['Evaluator', 'Candidate'];
  evaluator = {} as Evaluator;
  selectedRole: string;

  isFetching = false;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }




}
