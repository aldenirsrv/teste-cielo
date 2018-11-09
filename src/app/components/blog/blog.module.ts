/**
 * Angular dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Module dependencies
 */
import { BlogRoutingModule } from './blog-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { BlogComponent } from './blog.component';
import { BlogService } from './blog.service';

/**
 * Shared modules
 */
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule
  ],
  declarations: [BlogComponent, PostsComponent, PostDetailsComponent],
  providers: [BlogService]
})
export class BlogModule { }
