import { Injectable } from '@angular/core';
import { UtilsService } from '@app/core/utils.service';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  debug: boolean = true;
  messages: string[] = [];

  constructor(private utils: UtilsService) {}

  add(message: string) {
    if(this.debug) this.utils.log(`MessageService.add(${message})`);
    this.messages.push(message);
  }

  clear(){
    if(this.debug) this.utils.log(`MessageService.clear()`);
    this.messages = [];
  }

  showMessage(message: string) {
    if(this.debug) this.utils.log(`MessageService: showMessage(${message})`);
  }

  showError(errMsg: string) {
    if(this.debug) this.utils.log(`MessageService: showErrors(${errMsg})`);
  }

}
