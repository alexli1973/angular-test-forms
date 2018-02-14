import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  constructor() { }

  getFromLocalStorage() {
    return localStorage.getItem('counter');
  }
  putToLocalStorage(c: string) {
    localStorage.setItem('counter', c);
  }

}
