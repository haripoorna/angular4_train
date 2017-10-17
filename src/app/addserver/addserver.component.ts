// import { EventEmitter } from 'events';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
    this.addServer.emit({
      type: 'server',
      serverName : this.serverName,
      serverContent : this.serverContent
    });
  }
  onAddServerBluePrint(){
    this.addServerBluePrint.emit({
      type: 'blueprint',
      serverName : this.serverName,
      serverContent : this.serverContent
    });
  }
}
