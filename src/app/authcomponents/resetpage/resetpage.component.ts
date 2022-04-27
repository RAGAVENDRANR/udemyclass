import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-resetpage',
  templateUrl: './resetpage.component.html',
  styleUrls: ['./resetpage.component.css']
})
export class ResetpageComponent implements OnInit {

  constructor(private m:MethodsService) { }

  ngOnInit(): void {
  }
  routetohome(){
    this.m.routetohome()
  }
}
