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

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginpageComponent,
    SignuppageComponent,
    ResetpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
