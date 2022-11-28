import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'm-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
