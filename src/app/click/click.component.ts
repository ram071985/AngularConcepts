import { Component, OnInit } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.scss'],
})
export class ClickComponent implements OnInit {
  showParagraph = false;
  count = 0;
  buttonClicks: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  onParagraphToggle() {
    this.showParagraph = !this.showParagraph;
    this.buttonClicks.push(new Date());
  }
}
