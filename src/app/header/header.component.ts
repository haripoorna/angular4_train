import { Component } from '@angular/core';
import { Data } from '../model/data';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  headerTitle = 'header';
  pageName:String = '';
  Data : any;
  array : Array<Object>;
  constructor(){
   this.Data = Data;
   console.log(this.Data);
   this.array = [
     {
       "id" : "1",
       "name" : "hari"
     },
     {
       "id" : "2",
       "name" : "Surya"
     }
    ]
  }
  pageRedirection(value,index){
    console.log(index);
    if(value === 'home'){
      this.pageName = 'home';
    }
    if(value === 'services'){
      this.pageName = 'services';
    }
    if(value === 'login'){
      this.pageName = 'login';
    }
  }
}
 