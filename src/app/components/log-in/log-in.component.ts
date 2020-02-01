import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user = {} as User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.authService.loginForm(this.user.email, this.user.password)
      .subscribe(response => {
        console.log('response: ', response);
        if (response.status === 0) {
          console.log('this.authService.setUser(response)');
          this.authService.setUser(response);
        }
      }, error => {
        console.error(error);
      });
  }

}
