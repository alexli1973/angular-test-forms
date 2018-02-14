import { Component, OnInit } from '@angular/core';
import {CounterService} from '../shared/services/counter.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {
  counter: number;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counter = +this.counterService.getFromLocalStorage();
    this.setCounter();
  }

  setCounter() {
    let countTemp: number;
    countTemp = +this.counterService.getFromLocalStorage();
    countTemp = ++countTemp;
    this.counterService.putToLocalStorage(countTemp.toString());
    console.log('temp ' + countTemp.toString());

    }

}
