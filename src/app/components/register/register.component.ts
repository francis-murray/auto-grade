import { Component, OnInit } from '@angular/core';
import { Evaluator  } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material';

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

  constructor(private usersService: UsersService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }


  onRegister() {
    // Evaluator role
    if (this.selectedRole === 'Evaluator') {

      this.isFetching = true;
      this.usersService.createEvaluator(this.evaluator).subscribe(responseData => {
        this.isFetching = false;
        console.log(responseData);
        this.snackBar.open('Successful Registration', 'Close', {
          duration: 2000,
        });
      }, error => {
        this.isFetching = false;
        this.snackBar.open(error.error.error, 'Close', {
          duration: 2000,
        });
        console.log(error);
      });

    // Candidate role
     } else if (this.selectedRole === 'Candidate') {
      this.snackBar.open('No API route defined to register Candidates yet...', 'Close', {
        duration: 2000,
      });
     } else {
      this.snackBar.open('Please select a role.', 'Close', {
        duration: 2000,
      });
    }
    }
}
