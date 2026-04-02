import { Component, signal } from '@angular/core';

import { Counter } from '@shared/components/counter/counter';
import { HighlightDirective } from '@shared/directives/highlight';

import { WaveAudio as WaveAudio } from "../../components/wave-audio/wave-audio";


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Counter, HighlightDirective, WaveAudio],
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
