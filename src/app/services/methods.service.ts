import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  constructor(public r:Router) { }
  routetohome(){
    this.r.navigateByUrl('appcomponent')
  }
}
