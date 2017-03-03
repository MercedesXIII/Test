import { Component, OnInit } from '@angular/core';

import { Message } from './message';
import { MailService } from './mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
  providers: [MailService]
})
export class MailComponent implements OnInit {

  messages: Message[];
  selectedMessage: Message;

  constructor(private mailService: MailService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  getMessages(): void {
    this.mailService.getMessages().then(messages => this.messages = messages);
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }
}
