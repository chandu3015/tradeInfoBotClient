import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {Message} from '../models/message.model';
import {AppConstants} from '../../app.constants';
import {LexConstants} from '../../lex/lex.constants';
import * as LexRuntime from 'aws-sdk/clients/lexruntime';
import { Button } from '../models/button.component';



@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit, AfterViewChecked {
  // initatiating Lex RUntime
  lex: LexRuntime   = new LexRuntime({
    accessKeyId: LexConstants.AccessKey_Id,
  secretAccessKey: LexConstants.SecretAccess_Key,
  region: LexConstants.Region
});

  @ViewChild('scroll' , { static: true }) scroll: ElementRef ;

  messages: Message[] = [];

  constructor() {
   }

  ngOnInit() {
    let welcomeMessage: Message = new Message(AppConstants.BOT, AppConstants.INITIAL_MESSAGE);

    welcomeMessage.buttonList.push(AppConstants.STOCK_PROFILE_BUTTON);
    welcomeMessage.buttonList.push(AppConstants.STOCK_HISTORY_BUTTON);
    welcomeMessage.buttonList.push(AppConstants.STOCK_CURRENT_PRICE_BUTTON);

    this.messages.push(welcomeMessage);
  }


  clearChat() {
    this.messages = [];
    let welcomeMessage: Message = new Message(AppConstants.BOT, AppConstants.INITIAL_MESSAGE);

     welcomeMessage.buttonList.push(AppConstants.STOCK_PROFILE_BUTTON);
     welcomeMessage.buttonList.push(AppConstants.STOCK_HISTORY_BUTTON);
    welcomeMessage.buttonList.push(AppConstants.STOCK_CURRENT_PRICE_BUTTON);

    this.messages.push(welcomeMessage);
  }

  onMessageAdded(message: Message) {
    this.messages.push(message);
    this.getLexResponse(message.message);
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
}

  scrollToBottom(): void {
    try {
        this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
     }
}

  // @ts-ignore
  getLexResponse(message: String) {
    let messa: string;
   const params = {
      botAlias: LexConstants.Bot_Alias,
      botName: LexConstants.BOT_NAME,
      inputText: message,
      userId: LexConstants.USER_ID
    };

   // console.log("calling Lex--");


    // @ts-ignore
    this.lex.postText( params ,
     (err, data) => {
       if (err) {
         console.log(err, err.stack); // an error occurred
       } else {
         // console.log(data); // successful response
         messa = data.message;

         let temp: Message =  new Message(AppConstants.BOT, messa);

         if (data.responseCard) {
          data.responseCard.genericAttachments[0].buttons.forEach(element => {
            temp.buttonList.push(new Button(element.text, element.value));
          });
         }
         // console.log(data.responseCard && data.responseCard.genericAttachments[0].buttons);
         // console.log(temp);
         // console.log(LexConstants.AccessKey_Id);

         this.messages.push(temp);

         if (data.dialogState === 'ReadyForFulfillment') {

          let refreshMessage: Message = new Message(AppConstants.BOT, AppConstants.FINAL_MESSAGE);

           refreshMessage.buttonList.push(AppConstants.STOCK_PROFILE_BUTTON);
           refreshMessage.buttonList.push(AppConstants.STOCK_HISTORY_BUTTON);
           refreshMessage.buttonList.push(AppConstants.STOCK_CURRENT_PRICE_BUTTON);

           this.messages.push(refreshMessage);

         }

       }
       // this.messages.push(temp);



     }
     );

  }
}
