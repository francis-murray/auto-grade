import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  model: any = {};
  // user = {} as User;
  // constructor(private usersService: UsersService, private snackBar: MatSnackBar) { }

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    console.log('in login method');
    this.model.action = 'login';
    this.authService.loginForm(this.model.email, this.model.password).subscribe(response => {
      console.log('response: ');
      console.log(response);
      if (response.status === 'success') {
        this.authService.setUser(response);
      }
    }, error => {
      console.error(error);
    });
  }




  // onLogin() {
  //   this.usersService.authenticateUser(this.user.email, this.user.password)
  //   .subscribe(responseData => {
  //     console.log(responseData);
  //   })

  //   console.log(this.user);
  // }


}
