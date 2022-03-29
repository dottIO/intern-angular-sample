import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  
  messages: string[] = [];

  constructor(private messageSvc: MessageService) { }

  ngOnInit(): void {
    this.messageSvc.message$.subscribe(log => {
      this.messages.unshift(log)
    });
  }
}
