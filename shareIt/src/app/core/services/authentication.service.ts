import { UserCredentials } from './../models/UserCredentials';
import { UrlService } from './url.service';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { SerializerService } from './serializer.service';
import { Url } from '../models/Url';

@Injectable()
export class AuthenticationService {

  constructor(private apiService: ApiService, private serializer: SerializerService, private urlService: UrlService) { }

  public login(username: string, password: string) : void {
    const userCredentials = new UserCredentials(username, password);

    this.apiService
               .post<any>(this.urlService.getUrl(Url.Login), this.serializer.serialize(userCredentials))
               .subscribe((response) => {

               });
  }

  public logout() : void {
    // remove jwt from cookie and override the cookie
  }
}
