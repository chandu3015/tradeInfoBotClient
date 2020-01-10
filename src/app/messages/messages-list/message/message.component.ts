import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Message} from '../../models/message.model';
import {AppConstants} from '../../../app.constants';
import { Button } from '../../models/button.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message: Message ;
  @Output() messageAdded = new EventEmitter<Message>();


  constructor() { }

  ngOnInit() {
  }

  getImage(owner: String) {
  if (owner === AppConstants.USER) {
    return AppConstants.USER_IMAGE;
  } else {
    return AppConstants.BOT_IMAGE;
  }
  }

  getMessagePosition(owner: String) {
    if (owner === AppConstants.USER) {
      return AppConstants.USER_POSITION;
    } else {
      return AppConstants.BOT_POSITION;
    }
  }

  onMessageAdded(value: String)
  {
   //console.log("Message formaton after click...");
     const messageCOntent = value;
     
    const author = AppConstants.USER;
    const message = new Message(author, messageCOntent);
    this.messageAdded.emit(message);
    
  }


}
