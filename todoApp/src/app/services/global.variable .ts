import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVariable {
  get serverResource(){
    return 'http://localhost:8181';
  }
  get serverTodo(){
    return 'http://localhost:9842';
  }
}
