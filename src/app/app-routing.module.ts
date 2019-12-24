import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { SoumissionComponent } from './components/soumission/soumission.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'soumission', component:  SoumissionComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
