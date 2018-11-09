import { Component, OnInit } from '@angular/core';

@Component({
  template: `<router-outlet  #route="outlet"></router-outlet>`,
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
