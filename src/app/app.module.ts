import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { MessageComponent } from './messages/messages-list/message/message.component';
import { MessagePushComponent } from './messages/messages-list/message-push/message-push.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './messages/messages-list/message/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    MessagesListComponent,
    MessageComponent,
    MessagePushComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
