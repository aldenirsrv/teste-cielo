

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

import { IUSER } from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private user;
  // private handleError: ErrorsHandler;
  constructor(private httpClient:HttpClient, public error: ErrorsHandler) { }

  getUsers = (): Observable<IUSER[]> =>{
    return this.httpClient.get<IUSER[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.error.handleError) // then handle the error
    );
  }
  userDetail = (id: Number): Observable<IUSER> =>{
    return this.httpClient.get<IUSER>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.error.handleError) // then handle the error
    );
  }
}
