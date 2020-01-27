import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { SoumissionComponent } from './components/soumission/soumission.component';
import { AssignementComponent} from './components/assignement/assignement.component';
import {ViewScoreComponent} from './components/view-score/view-score.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'soumission', component:  SoumissionComponent},
  { path: 'assignement', component: AssignementComponent},
  { path : 'view-score', component: ViewScoreComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
