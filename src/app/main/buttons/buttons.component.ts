import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Output() sendMessageEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() receiveMessageEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  sendMsg = () => {
    this.sendMessageEvent.emit();
  }

  receiveMsg = () => {
    this.receiveMessageEvent.emit();
  }

}
