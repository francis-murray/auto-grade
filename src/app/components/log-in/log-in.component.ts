import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    // this.model.action = 'login';
    this.authService.loginForm(this.model.email, this.model.password)
      .subscribe(response => {
        console.log('response: ', response);
        // if (response.status === 0) {
          console.log('this.authService.setUser(response)');
          this.authService.setUser(response);
        // }
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
