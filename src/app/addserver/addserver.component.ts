// import { EventEmitter } from 'events';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-addserver',
  templateUrl: './addserver.component.html',
  styleUrls: ['./addserver.component.css']
})
export class AddserverComponent implements OnInit {
  serverName: String = '';
  serverContent: String = '';
  serverElement = [];
  @Output() addServer = new EventEmitter<any>();
  @Output() addServerBluePrint = new EventEmitter<any>();

  @ViewChild('serverNameInput') viewChildBluePrintServerName: ElementRef;
  @ViewChild('serverContentInput') viewChildBluePrintServerContent: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    console.log(serverNameInput.value);
    console.log(serverContentInput.value);
    this.addServer.emit({
      type: 'server',
      serverName : serverNameInput.value,
      serverContent : serverContentInput.value
    });
  }
  onAddServerBluePrint(){
    this.addServerBluePrint.emit({
      type: 'blueprint',
      serverName : this.viewChildBluePrintServerName.nativeElement.value,
      serverContent : this.viewChildBluePrintServerContent.nativeElement.value
    });
  }
}
