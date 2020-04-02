import { Component, OnInit, Input } from '@angular/core';
import { MessagingService } from '../../services/messaging.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../../models/message';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Input() sendMsgSubject: BehaviorSubject<void>;
  @Input() receiveMsgSubject: BehaviorSubject<void>;

  receiveMsg = '';
  sendMsg = '';

  constructor(private msgServ: MessagingService) { }

  ngOnInit() {
    this.receiveMsgSubject.subscribe( _ => { this.receiveMessage(); });
    this.sendMsgSubject.subscribe( _ => { this.sendMessage(this.sendMsg); });
  }


  sendMessage =  (msg: string) => {
    this.receiveMsg = this.msgServ.post(msg);
  }

  receiveMessage = () => {
    this.receiveMsg = this.msgServ.get();
    console.log('Messaged received:', this.receiveMsg);
  }

}
