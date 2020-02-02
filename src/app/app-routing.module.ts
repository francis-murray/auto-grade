import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';


import { SubmitAssignmentComponent } from './components/submit-assignment/submit-assignment.component';
import { ViewAssignmentComponent} from './components/view-assignment/view-assignment.component';
import {ViewCalendarComponent} from './components/view-calendar/view-calendar.component';
import {ViewScoreComponent} from './components/view-score/view-score.component';
import { ViewProgramComponent } from './components/view-program/view-program.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import {ViewAddgroupComponent} from "./components/view-addgroup/view-addgroup.component";



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: 'submit-assignment', component:  SubmitAssignmentComponent},
  { path: 'view-assignment', component: ViewAssignmentComponent},
  { path: 'view-calendar', component: ViewCalendarComponent},
  { path : 'view-score', component: ViewScoreComponent},
  { path: 'view-program', component: ViewProgramComponent},
  { path: 'view-addgroup', component: ViewAddgroupComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
