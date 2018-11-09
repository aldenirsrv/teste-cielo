/**
 * Angular dependencies
 */
import { Component, OnInit } from '@angular/core';
/**
 * Services
 */
import { UsersService } from '../users.service';
import { LoaderService } from '../../../shared/components/loader/loader.service';

/**
 * Models
 */
import { IUSER } from './../../../models/user.model'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private service: UsersService, private loader: LoaderService) { }
  public users:Array<IUSER>
  ngOnInit() {
    this.getUsers();
  }
  /**
   * Get all users
   */
  getUsers = () => {
    this.loader.show();
    this.service.getUsers().subscribe(results => {
     this.users = results;
     this.loader.hide()
    });
   }
}
