import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user = {} as User;
  constructor(private usersService: UsersService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onLogin() {
    this.usersService.authenticateUser(this.user.email, this.user.password)
    .subscribe(responseData => {
      console.log(responseData);
    })

    console.log(this.user);
  }


}
