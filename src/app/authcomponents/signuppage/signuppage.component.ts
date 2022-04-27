import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  constructor(private m:MethodsService) { }

  ngOnInit(): void {
  }
  routetohome(){
    this.m.routetohome()
  }
}
