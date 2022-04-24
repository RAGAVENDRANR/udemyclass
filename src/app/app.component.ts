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
  masterSelected:boolean;
  checklist:any;
  checkedList:any;
  constructor(){setTimeout(()=>{this.value=true,this.alerter() },2000),
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
}
