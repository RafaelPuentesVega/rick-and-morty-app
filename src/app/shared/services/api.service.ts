import { Injectable, OnInit } from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

import { catchError, finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  api_url = 'https://rickandmortyapi.com/api/';

  /**
 * GET Http Request
 *
 * @param {string} path
 * @param {HttpParams} params
 * @returns {Observable<any>}
 */

get(path: string, params: any = {}): Observable<any> {
  return this.http.get<any>(this.api_url+`${path}`, params)
  .pipe(
    catchError(error => {
      console.error('Error:', error);
      throw error;
    }),
    finalize(() => {

    })
  );
}
}

