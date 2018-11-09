/**
 * Angular dependencies
 */
import { Component, OnInit } from '@angular/core';
/**
 * Services
 */
import { BlogService } from '../blog.service';
import { LoaderService } from '../../../shared/components/loader/loader.service';

/**
 * Models
 */
import { IPOST } from './../../../models/post.model'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts:Array<IPOST>;
  constructor(private service: BlogService, private loader: LoaderService) { }

  ngOnInit() {
    this.getPosts()
  }
  /**
   * Get all posts
   */
  getPosts = () => {
  this.loader.show();
   this.service.getPosts().subscribe(results => {
    this.posts = results
    this.loader.hide();
   });
  }
}
