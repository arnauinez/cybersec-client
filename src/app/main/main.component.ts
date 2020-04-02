import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit  {
  
  public receiveMsgSubject: BehaviorSubject<void> = new BehaviorSubject(null);
  public sendMsgSubject: BehaviorSubject<void> = new BehaviorSubject(null);

  constructor() { }

  ngOnInit() {
  }

  receiveMsg = () => {
    this.receiveMsgSubject.next();
  }

  sendMsg = () => {
    this.sendMsgSubject.next();
  }
}
