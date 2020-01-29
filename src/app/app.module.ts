import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatFileUploadModule } from 'angular-material-fileupload';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Angular Material */
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Forms Module */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

/* Components */
import { TopMenuComponent } from './top-menu/top-menu.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SubmitAssignmentComponent } from './components/submit-assignment/submit-assignment.component';
import { ViewAssignmentComponent } from './components/view-assignment/view-assignment.component';
import { MatExpansionModule } from '@angular/material';
import { ViewCalendarComponent } from './components/view-calendar/view-calendar.component';
import { ViewProgramComponent } from './components/view-program/view-program.component';
import { InviteCandidateComponent } from './components/invite-candidate/invite-candidate.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LogInComponent,
    RegisterComponent,
    SubmitAssignmentComponent,
    ViewAssignmentComponent,
    ViewCalendarComponent,
    ViewProgramComponent,
    InviteCandidateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFileUploadModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
