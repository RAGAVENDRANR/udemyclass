import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  ALLDATA=[]
  loginForm = this.fb.group({
    username: [null,[Validators.required,Validators.email]],
    password: [null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]]
  });
  data!:any
  constructor(public r:Router, public fb:FormBuilder, public api:ApiService) { }
  ngOnInit(): void {
    console.log("Auth Component Initilized")
    this.api.datacheck();
    this.api.getalldata().subscribe((res:any)=>{console.log("Console log from the get method on api service",res)})
  }
  dashboardopen(){
    console.log("button clicked")
    
  }
  login(){
    alert("Login Successs")
    this.api.createdata(this.loginForm.value)
    this.usercheck()
    this.loginForm.reset()    
    this.r.navigateByUrl('dashboard')
  }
  signup(){
    alert("Redirecting to the Signuppage...")
    this.r.navigateByUrl('auth/signuppage')
  }
  reset(){
    alert("Redirecting to the Resetpage...")
    this.r.navigateByUrl('auth/resetpage')
  }
  usercheck(){
    this.api.getalldata().subscribe((res:any)=>{console.log("Console log from the get method on api service",res)
  })
  }
}
