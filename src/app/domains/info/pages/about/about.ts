import { Component, signal } from '@angular/core';

import { Counter } from './../../../shared/components/counter/counter';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Counter],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  duration = signal(1000);
  message = signal('Contador desde about');

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(Number(input.value));
  }
  
  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }

}
