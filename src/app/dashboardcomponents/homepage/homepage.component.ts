import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/services/methods.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  masterSelected:boolean;
  checklist:any;
  checkedList:any;
  constructor(
    public m:MethodsService

  ){setTimeout(()=>{this.value=true,this.alerter() },2000),
  this.masterSelected = false;
      this.checklist = [
        {id:1,value:'User01',isSelected:false},
        {id:2,value:'User02',isSelected:false},
        {id:3,value:'User03',isSelected:false},
      ];
      this.getCheckedItemList();
  }
  ngOnInit() {
    this.resultvalue=this.totalvalue /this.constantvalue
   this.finalvalue = Math.ceil(this.resultvalue)
    console.log(this.resultvalue)
    console.log(this.finalvalue)
    this.checkedList=null
    console.log(this.checklist)
  }
  name!:""
  totalvalue=201;
  constantvalue=50;
  resultvalue:any;
  finalvalue:any;
    value=false
  // to check the type of the variable = "typeof"
  alerter(){
    console.log(typeof this.value," = " , this.value)
    console.log("Application loading sucess!")
  }
  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }
  namesvalue=''
  addvalue(event:Event){
  
this.namesvalue=(<HTMLInputElement>event.target).value
  }
  enjoy(){
    console.log("enter ",this.namesvalue)
  }

  //Assignment 2  : 
  username:any
  lengthcount=true
  pressevent(event:Event){
    // this.username=(<HTMLInputElement>event.target).value
    console.log("Input was optained",this.username.length)
    if(this.username.length != 0){
       this.lengthcount=false
    }
    else {
       this.lengthcount =true
    }
  }
  save(){
    console.log("Hello the value of the input field" , this.username)
    this.username = null
    this.lengthcount=true
  }
  clientname='';
  // cliententry=false
  // show(){
  //   this.cliententry=!this.cliententry
  // }
  routetohome(){
    this.m.routetohome()
  }
  ISSUE=true
  showcontent(){
    this.ISSUE=!this.ISSUE
  }
}
