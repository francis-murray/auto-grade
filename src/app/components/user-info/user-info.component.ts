import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  dataFromServer: any = {
      status: 0,
      user_data: {
        firstname: '',
        lastname: '',
        email: '',
        type: '',
        created_timestamp: 0,
        groups: []
      }
    };

  isFetching = false;

  constructor(private authService: AuthService, private usersService: UsersService) { }

  ngOnInit() {
    this.getUserInfo();
    console.log('Le composant a fini son initialisation');
  }

  getUserInfo() {
    console.log('getUserInfo()... ');
    this.usersService.getUserInfo().subscribe(response => {
      this.dataFromServer = response;
      console.log('dataFromServer: ', this.dataFromServer);
    });
  }

  logout() {
    this.authService.logout();
  }
}
