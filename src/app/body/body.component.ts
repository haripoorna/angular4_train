import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  // interpolationValue = "this is interpolation value"
  serverName: any = '';
  serverContent:any = '';
  serverElement = [];
  constructor(){
    this.serverElement = [{
      type : 'server',
      name : 'test server',
      content : 'This is Dummy test server'
    }]
  }
  // addServer(type:String){
  //   this.serverElement.push({
  //     type : type,
  //     name : this.serverName,
  //     content : this.serverContent
  //   })
  //   console.log(this.serverElement)
  // }
  // addServerBluePrint(type:String){
  //   this.serverElement.push({
  //     type : type,
  //     name : this.serverName,
  //     content : this.serverContent
  //   })
  //   console.log(this.serverElement)
  // }
}