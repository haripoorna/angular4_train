import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { AddserverComponent } from './addserver/addserver.component';
import { ServerElementComponent } from './server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    ServicesComponent,
    LoginComponent,
    AddserverComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 