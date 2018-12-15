import { Injectable } from '@angular/core';

@Injectable()
export class SerializerService {

  public serialize(data: any) : string {
    return JSON.stringify(data);
  }

  public deserialize<T>(serializedData: string) : T {
      return JSON.parse(serializedData);
  }
}
