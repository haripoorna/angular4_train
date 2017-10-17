import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  // interpolationValue = "this is interpolation value"
  serverName: any = '';
  serverContent: any = '';
  serverElement = [];
  constructor() {
    this.serverElement = [{
      type : 'server',
      name : 'test server',
      content : 'This is Dummy test server'
    }]
  }
  serverAdded(event) {
    console.log(event);
    this.serverElement.push({
      type : event.type,
      name : event.serverName,
      content : event.serverContent
    })
    console.log(this.serverElement);
  }
 serverBluePrintAdded(event){
    this.serverElement.push({
      type : event.type,
      name : event.serverName,
      content : event.serverContent
    })
    console.log(this.serverElement);
  }
}