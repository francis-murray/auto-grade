import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MatFileUploadModule } from "angular-material-fileupload";
import { HttpClientModule } from "@angular/common/http";

/* Routing */
import { AppRoutingModule } from "./app-routing.module";

/* Angular Material */
import { AngularMaterialModule } from "./angular-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatExpansionModule, MatSnackBarModule, MatProgressSpinnerModule, MatCheckboxModule } from "@angular/material";

/* Forms Module */
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
import { LayoutModule } from "@angular/cdk/layout";

/* Custom Components */
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { RegisterComponent } from "./components/register/register.component";
import { LogInComponent } from "./components/log-in/log-in.component";
import { ViewScoreComponent } from "./components/view-score/view-score.component";
import { SubmitAssignmentComponent } from "./components/submit-assignment/submit-assignment.component";
import { ViewAssignmentComponent } from "./components/view-assignment/view-assignment.component";
import { ViewCalendarComponent } from "./components/view-calendar/view-calendar.component";
import { ViewProgramComponent } from "./components/view-program/view-program.component";
import { UserInfoComponent } from "./components/user-info/user-info.component";

import { JwtModule } from "@auth0/angular-jwt";
import { ViewAddgroupComponent } from "./components/view-addgroup/view-addgroup.component";
import { ViewAddassignmentComponent } from "./components/view-addassignment/view-addassignment.component";
import { ViewPaymentComponent } from "./components/view-payment/view-payment.component";
import { NgxPayPalModule } from "ngx-paypal";
import { ViewAddCandidateTogroupComponent } from "./components/view-add-candidate-togroup/view-add-candidate-togroup.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    LogInComponent,
    RegisterComponent,
    SubmitAssignmentComponent,
    ViewAssignmentComponent,
    ViewCalendarComponent,
    ViewScoreComponent,
    ViewProgramComponent,
    // AuthComponent,
    UserInfoComponent,
    ViewAddgroupComponent,
    ViewAddassignmentComponent,
    ViewPaymentComponent,
    ViewAddCandidateTogroupComponent,
    DashboardComponent
  ],
  imports: [
    NgxPayPalModule,
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
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSnackBarModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("auth_token");
        },
        whitelistedDomains: ["localhost"],
        blacklistedRoutes: ["localhost/auth/login"]
      }
    }),
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
