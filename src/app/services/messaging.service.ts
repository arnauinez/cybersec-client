import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  url: string = 'http://localhost:3000/messages';
  headers = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  post = (msg: string) => {
    let responseMessage: string;
    console.log(`Sending: ${msg}`);
    this.http.post<Message>(this.url, 
      { message: msg, date: Date }, 
      { headers: this.headers })
      .subscribe( res => { responseMessage = res.message });
      return responseMessage;
  }

  get = () => {
    let receivedMessage: string;
    this.http.get<Message>(this.url, { observe: 'response' })
    .subscribe(res => {
      receivedMessage = res.body.message;
      console.log(`Received Message: ${receivedMessage}`)
    })
    return receivedMessage;
  }
}
