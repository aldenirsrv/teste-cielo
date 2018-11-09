import { Component, OnInit } from '@angular/core';

@Component({
  template: `<router-outlet  #route="outlet"></router-outlet>`,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
