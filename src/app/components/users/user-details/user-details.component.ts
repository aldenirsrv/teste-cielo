/**
 * Angular dependencies
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/**
 * Services
 */
import { UsersService } from '../users.service';

import { BlogService } from '../../blog/blog.service';
import { LoaderService } from '../../../shared/components/loader/loader.service';

/**
 * Models
 */
import { IUSER } from './../../../models/user.model';
import { IPOST } from './../../../models/post.model'
import { ICOMMENT } from './../../../models/comment.model'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public user: IUSER;
  public userId: Number;
  public posts: Array<IPOST>;
  public comments: Array<ICOMMENT>
  public lat: number;
  public lng: number;
  constructor(private service: UsersService, private blogService: BlogService, private activatedRoute: ActivatedRoute, private loader: LoaderService) {
    this.userId = activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.userDetail()
  }
  /**
   * Get user by id
   */
  userDetail = async () => {
    this.loader.show();
    this.service.userDetail(this.userId).subscribe(async results => {
      this.user = await results;
      this.getPostsByUser(this.user.id);
      this.lat = Number(this.user.address.geo.lat)
      this.lng = Number(this.user.address.geo.lng)
    });
  }
  /**
   * Get posts by user
   */
  getPostsByUser = (userId) => {
    this.blogService.getPostsByUser(userId).subscribe(results => {
      this.posts = results;
      this.loader.hide();
    });
  }

}
