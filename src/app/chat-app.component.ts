import { Component } from '@angular/core';

@Component({
  // selector: '.chat-app' by class
  // selector: '[chat-app]' by attribute
  selector: 'chat-app',
  templateUrl: '/chat-app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ChatAppComponent {
  name = 'Reid';
}
