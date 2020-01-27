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
import { SoumissionComponent } from './components/soumission/soumission.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { MatExpansionModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LogInComponent,
    RegisterComponent,
    SoumissionComponent,
    AssignmentComponent
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
