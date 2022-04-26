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

import { HomepageComponent } from './dashboardcomponents/homepage/homepage.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './dashboardcomponents/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginpageComponent,
    SignuppageComponent,
    ResetpageComponent,
    DashboardComponent,
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    MatFormFieldModule,MatIconModule,MatToolbarModule,MatCardModule
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
