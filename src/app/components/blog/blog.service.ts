

/**
 * Angular dependencies
 */
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

/**
 * RXJS
 */
import { Observable } from "rxjs";
import { catchError, retry } from 'rxjs/operators';

/**
 * Services
 */

import { ErrorsHandler } from "../../singleton/errors-handler";

/** interfaces */

import { IPOST } from "../../models/post.model";
import { ICOMMENT } from '../../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private user;
  // private handleError: ErrorsHandler;
  constructor(private httpClient:HttpClient, public error: ErrorsHandler) { }

  getPosts = (): Observable<IPOST[]> =>{
    return this.httpClient.get<IPOST[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.error.handleError) // then handle the error
    );
  }
  getPostsByUser = (userId: Number): Observable<IPOST[]> => {
    return this.httpClient.get<IPOST[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.error.handleError) // then handle the error
    );
  }
  postDetail = (id: Number): Observable<IPOST> =>{
    return this.httpClient.get<IPOST>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.error.handleError) // then handle the error
    );
  }
  postComments = (id: Number): Observable<ICOMMENT[]> =>{
    return this.httpClient.get<ICOMMENT[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.error.handleError) // then handle the error
    );
  }
}
