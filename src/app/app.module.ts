import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { HttpClientModule } from '@angular/common/http';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Angular Material */
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatExpansionModule, MatSnackBarModule } from '@angular/material';

/* Forms Module */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

/* Custom Components */
import { TopMenuComponent } from './top-menu/top-menu.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SubmitAssignmentComponent } from './components/submit-assignment/submit-assignment.component';
import { ViewAssignmentComponent } from './components/view-assignment/view-assignment.component';
import { ViewCalendarComponent } from './components/view-calendar/view-calendar.component';
import { ViewProgramComponent } from './components/view-program/view-program.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LogInComponent,
    RegisterComponent,
    SubmitAssignmentComponent,
    ViewAssignmentComponent,
    ViewCalendarComponent,
    ViewProgramComponent
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
    MatExpansionModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
