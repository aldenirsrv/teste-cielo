import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMENU } from './../../../models/menu.model'
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public menuItens: Array<IMENU>;
  constructor(
    private router: Router, ) {
    /**
     * Create menu
     */
    this.menuItens = [
      { name: 'Blog', route: '/' },
      { name: 'Usuários', route: '/users' },
      { name: 'Dashboard', route: '/dashboard' }
    ]

  }

  ngOnInit() {
  }

}
