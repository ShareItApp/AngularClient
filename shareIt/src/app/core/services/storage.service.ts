import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    public read() : string {
        // parse to get the Set-Cookie value
        return document.cookie;
    }

    public write(data: string) {
        document.cookie = data;
    }
}
