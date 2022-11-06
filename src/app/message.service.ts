import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }

  showMessage(message: string) {
    console.log(`MessagesService: showMessage(${message})`);
  }

  showError(errMsg: string) {
    console.log(`MessagesService: showErrors(${errMsg})`);
  }

}
