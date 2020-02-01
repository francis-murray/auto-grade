import { Component, OnInit } from '@angular/core';
import { Evaluator  } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roles: any = ['Evaluator', 'Candidate'];
  evaluator = {} as Evaluator;
  selectedRole: string;

  isFetching = false;

  constructor(private usersService: UsersService, private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit() {
  }


  onEvalRegister() {
      this.isFetching = true;
      this.usersService.registerEvaluator(this.evaluator).subscribe(responseData => {
        this.isFetching = false;
        console.log(responseData);
        this.snackBar.open('Successful Registration! Please sign in', 'Close', {
          duration: 2000,
        });
        this.router.navigate(['/login']);
      }, error => {
        this.isFetching = false;
        this.snackBar.open(error.error.error, 'Close', {
          duration: 2000,
        });
        console.log(error);
      });
  }
}
