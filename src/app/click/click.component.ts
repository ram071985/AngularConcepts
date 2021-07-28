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
    this.count += 1;
    this.buttonClicks.push(this.count);
    console.log(this.buttonClicks);
    if (!this.showParagraph) {
      return (this.showParagraph = true);
    }
    return (this.showParagraph = false);
  }

  getColor() {
    for (let i = 0; i < this.buttonClicks.length; i++) {
      if(this.buttonClicks[i] > 4)
      {
        return 'blue';
      }
    }
    return null;

  }
}
