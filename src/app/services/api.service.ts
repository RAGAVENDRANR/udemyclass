import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{
  username="admin"
  password="admin"
  getusername=''
  getpassword=''
  iscorrect=false
  constructor() { }
  ngOnInit(){
    this.datacheck()
    }
  datacheck(){
    console.log("Service method call")
    if (this.getusername == this.username){
      if(this.getpassword == this.password){
        return this.iscorrect = true
      }
      return this.iscorrect=true
    }
    else {
      return this.iscorrect =false
    }
  }
  
}
