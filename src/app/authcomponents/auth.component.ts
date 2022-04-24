import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core'
// import {  } from 'stream';
@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnInit{ 
    @Input() childdata:any;
    @Output() outputdata:EventEmitter<any>=new EventEmitter()
ngOnInit(){
    console.log("Auth Component initilized",this.childdata)
    this.outputdata.emit("child data from the auth component")
}
parent!:"hello"
}