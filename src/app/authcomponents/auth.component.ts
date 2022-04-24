import { Component, Input, OnInit } from '@angular/core'
@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent implements OnInit{ 
    @Input() childdata:any
ngOnInit(){
    console.log("Auth Component initilized",this.childdata)
}
parent!:"hello"
}