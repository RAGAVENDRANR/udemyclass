import { HttpClient } from '@angular/common/http';
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
  constructor(public http:HttpClient) { }
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
  //curdoperation
  private baseUrl="http://localhost:3000/userdata"
  getalldata(){
    return this.http.get(this.baseUrl)
    // .subscribe((res:any)=>{console.log("Console log from the get method on api service",res)})
  }
  createdata(adduser:any){
    return this.http.post(this.baseUrl,adduser)
    // .subscribe((res:any)=>{console.log("Console log of post method",res)})
  }
  getuserbyid(id:any){
    return this.http.get(`${this.baseUrl}/${id}`)
    // .subscribe((res:any)=>{console.log("cosole log get by id",res),id})
  }
  updateuser(id:any,updateddata:any){
    return this.http.put(`${this.baseUrl}/${id}`, updateddata)
    // .subscribe((res:any)=>{console.log("Console log update method", res + updateddata)})
  }
  deleteuser(id:any){
    return this.http.delete(`${this.baseUrl}/${id}`)
    // .subscribe((res:any)=>{console.log("Console log delete method", res + id)})
  }
}
