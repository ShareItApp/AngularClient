import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

const BaseApiUrl = '';

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public get<T>(url: string) : Observable<T> {
      return this.httpClient.get<T>(BaseApiUrl + url);
  }

  public post<T>(url: string, body: any, headers?: HttpHeaders) : Observable<T> {
      if (headers) {
        return this.httpClient.post<T>(url, body, { headers });
      } else {
        return this.httpClient.post<T>(url, body);
      }
    }
}
