import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  dataFromServer: any = [];
  isFetching = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.authService.getInfoUser().subscribe(response => {
      this.dataFromServer = response;
      console.log('dataFromServer: ', this.dataFromServer);
    });
  }

  logout() {
    this.authService.logout();
  }
}
