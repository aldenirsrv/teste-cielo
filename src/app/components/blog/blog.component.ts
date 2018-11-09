import { Component, OnInit } from '@angular/core';

@Component({
  template: `<router-outlet  #route="outlet"></router-outlet>`,
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
