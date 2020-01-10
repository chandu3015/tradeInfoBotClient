import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Button } from 'src/app/messages/models/button.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() button: Button ;
  @Output() messageAdded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickButton(){
    this.messageAdded.emit();
  }

}
