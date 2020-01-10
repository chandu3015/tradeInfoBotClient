import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Message} from '../../models/message.model';
import {AppConstants} from '../../../app.constants';

import {LexRuntime} from 'aws-sdk';
import {LexConstants} from '../../../lex/lex.constants';


@Component({
  selector: 'app-message-push',
  templateUrl: './message-push.component.html',
  styleUrls: ['./message-push.component.css']
})
export class MessagePushComponent implements OnInit {

  @ViewChild('userMessage', { static: true }) userMessage: ElementRef ;
  @Output() messageAdded = new EventEmitter<Message>();
    appConsts: AppConstants = new AppConstants();

  @Output() clearChatRequest = new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

  onPushSend() {
    // console.log("pushed...");
    const messageCOntent = this.userMessage.nativeElement.value;
    this.userMessage.nativeElement.value = ' ';
    const author = AppConstants.USER;
    const message = new Message(author, messageCOntent);
    this.messageAdded.emit(message);

  }

  onPushClear() {
    this.clearChatRequest.emit();

  }
}
