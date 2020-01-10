import {Button} from './messages/models/button.component';

export  class AppConstants {
  public static  USER_IMAGE = '../assets/resources/images/user.jpg' ;
  public static BOT_IMAGE = '../assets/resources/images/bot.jpg';
  public static USER = 'user';
  public static BOT = 'bot';
  public  static USER_POSITION = 'pull-left';
  public  static BOT_POSITION = 'pull-right';
  public  static USER_MESSAGE_FLOAT = 'pull-left';
  public  static BOT_MESSAGE_FLOAT = 'pull-right';

  public static INITIAL_MESSAGE = 'Hi, How can I help you .  Either choose the options or text me .';
  public static FINAL_MESSAGE = 'Hi, Is there anything else that I can help you with ,  choose the options or text me ';


  public static STOCK_PROFILE_BUTTON: Button = new Button('stock profile', 'stock profile');
  public static STOCK_HISTORY_BUTTON: Button = new Button('stock history', 'stock history');
  public static STOCK_CURRENT_PRICE_BUTTON: Button = new Button('stock current price', 'stock history');

}
