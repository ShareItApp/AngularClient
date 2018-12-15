import { Injectable } from '@angular/core';

import { Url } from './../models/Url';

@Injectable()
export class UrlService {

  public getUrl(url: Url) {
    switch (url) {
        case Url.Login:
            return 'Auth/Login';
        default:
            throw Error('Url to path mapping for the specified url is not implemented.');
    }
  }
}
