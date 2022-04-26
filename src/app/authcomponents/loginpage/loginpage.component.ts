import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  loginForm = this.fb.group({
    username: [null],
    password: [null]
  });
  constructor(public r:Router, public fb:FormBuilder, public api:ApiService) { }
  // @Input() data!: any;
  ngOnInit(): void {
    // console.log(this.data)
    this.api.datacheck()
  }
  dashboardopen(){
    console.log("button clicked")
    
  }
  onSubmit(){
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
