import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log("App component initilised")
  }
  parentdata="data from the appcomponent"
  @HostListener('contextmenu', ['$event'])
  onRightClick(event:any) {
  event.preventDefault();} 
}
