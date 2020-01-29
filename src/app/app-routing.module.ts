import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { SubmitAssignmentComponent } from './components/submit-assignment/submit-assignment.component';
import { ViewAssignmentComponent} from './components/view-assignment/view-assignment.component';
import {ViewCalendarComponent} from './components/view-calendar/view-calendar.component';
import { ViewProgramComponent } from './components/view-program/view-program.component';
import { InviteCandidateComponent } from './components/invite-candidate/invite-candidate.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'submit-assignment', component:  SubmitAssignmentComponent},
  { path: 'view-assignment', component: ViewAssignmentComponent},
  { path: 'view-calendar', component: ViewCalendarComponent},
  { path: 'view-program', component: ViewProgramComponent},
  { path: 'invite-candidate', component: InviteCandidateComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
