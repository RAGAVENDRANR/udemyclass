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
  loginForm = this.fb.group({
    username: [null,[Validators.required,Validators.email]],
    password: [null,[Validators.required,Validators.minLength(6),Validators.maxLength(16)]]
  });
  data!:any
  constructor(public r:Router, public fb:FormBuilder, public api:ApiService) { }
  ngOnInit(): void {
    console.log("Auth Component Initilized")
    this.api.datacheck()
  }
  dashboardopen(){
    console.log("button clicked")
    
  }
  save(){
    alert("Login Successs")
    let data = this.loginForm.value
    this.api.getusername = data.username
    this.api.getpassword = data.password
    console.log("Service values ",this.api.getusername,this.api.getpassword)
    this.api.datacheck()
    console.log("boolean value ",this.api.iscorrect)
    this.r.navigateByUrl('dashboard')
  }
}
