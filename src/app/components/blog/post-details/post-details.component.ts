/**
 * Angular dependencies
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/**
 * Services
 */
import { BlogService } from '../blog.service';
import { LoaderService } from '../../../shared/components/loader/loader.service';

/**
 * Models
 */
import { IPOST } from './../../../models/post.model'
import { ICOMMENT } from './../../../models/comment.model'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  public post: IPOST;
  public comments: Array<ICOMMENT>
  public postId: Number;
  constructor(private service: BlogService, private activatedRoute: ActivatedRoute, private loader: LoaderService) {
    this.postId = activatedRoute.snapshot.params.id;
   }

  ngOnInit() {
    this.postDetail()
  }
  /**
   * get post by id
   */
  postDetail = () => {
    this.loader.show();
    this.service.postDetail(this.postId).subscribe(results => {
    this.post = results
    this.postComments(this.post.id)
    });
   }

   /**
    * get comments by post id
    */
   postComments = (id: Number) => {
     this.service.postComments(id).subscribe(results => {
      this.comments = results
      this.loader.hide();
     });
    }

}
