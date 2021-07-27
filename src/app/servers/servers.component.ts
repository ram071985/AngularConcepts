import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: '<auth-page></auth-page><auth-page></auth-page>',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
