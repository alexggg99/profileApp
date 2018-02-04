import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariable {
  get bookResource(){
    return 'http://localhost:9000';
  }
  get serverResource(){
    return 'http://localhost:8181';
  }
}
