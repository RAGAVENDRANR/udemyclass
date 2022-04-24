import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './authcomponents/auth.component';
import { LoginpageComponent } from './authcomponents/loginpage/loginpage.component';
import { SignuppageComponent } from './authcomponents/signuppage/signuppage.component';
import { ResetpageComponent } from './authcomponents/resetpage/resetpage.component';
import { DashboardComponent } from './dashboardcomponents/dashboard/dashboard.component';

import { ApiService } from './services/api.service';
import { DatabinderService } from './services/databinder.service';
import { MethodsService } from './services/methods.service';
import { TestapiService } from './services/testapi.service';
import { NavbarComponent } from './dashboardcomponents/navbar/navbar.component';
import { HomepageComponent } from './dashboardcomponents/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginpageComponent,
    SignuppageComponent,
    ResetpageComponent,
    DashboardComponent,
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [
    ApiService,
    DatabinderService,
    MethodsService,
    TestapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
