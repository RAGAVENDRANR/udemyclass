import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(public r:Router) { }
  // @Input() data!: any;
  ngOnInit(): void {
    // console.log(this.data)
  }
  dashboardopen(){
    console.log("button clicked")
    this.r.navigateByUrl('dashboard')
  }
}
