import { Button } from './button.component';



export  class Message {
  public owner: String ;
  public message: String;
 // public buttonList: Button[]=[new Button("Service Restart","Service Restart"),new Button("DB request","DB request")];
  public buttonList: Button[]=[];

  constructor( owner: String, message: String ) {
    this.owner = owner;
    this.message = message;

  }


  
  
}
