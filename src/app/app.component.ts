import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  @HostListener('contextmenu', ['$event'])
  onRightClick(event:any) {
  event.preventDefault();}

  constructor(){setTimeout(()=>{this.value=true,this.alerter() },2000)}
  ngOnInit() {}
  name=""
  value=false
  // to check the type of the variable = "typeof"
  alerter(){
    console.log(typeof this.value," = " , this.value)
    console.log("Application loading sucess!")
  }

}
