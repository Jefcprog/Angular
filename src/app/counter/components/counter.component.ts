import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  constructor(){

  }
    public counter: number = 10;

    increaseBy(value : number): void {
      this.counter += value
    }

    decreaseBy(value : number): void {
      this.counter -= value
    }

    reset(): void {
      this.counter = 10
  }
}
