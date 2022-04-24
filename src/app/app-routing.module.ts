import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './authcomponents/auth.component';
import { LoginpageComponent } from './authcomponents/loginpage/loginpage.component';
import { ResetpageComponent } from './authcomponents/resetpage/resetpage.component';
import { SignuppageComponent } from './authcomponents/signuppage/signuppage.component';
import { DashboardComponent } from './dashboardcomponents/dashboard/dashboard.component';

import { HomepageComponent } from './dashboardcomponents/homepage/homepage.component';


const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',component:AuthComponent,children:[
    {path:'',redirectTo:'loginpage',pathMatch:'full'},
    {path:'loginpage',component:LoginpageComponent},
    {path:'resetpage',component:ResetpageComponent},
    {path:'signuppage',component:SignuppageComponent},
    {path:'**',redirectTo:'loginpage',pathMatch:'full'},
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'',redirectTo:'homepage',pathMatch:'full'},
    {path:'homepage',component:HomepageComponent},

  ]},
  {path:'**',redirectTo:'auth',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
