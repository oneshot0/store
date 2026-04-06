import { Component, Input, signal, SimpleChanges } from '@angular/core';
import { required } from '@angular/forms/signals';


@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    //Esto corre antes de que el componente se muestre en pantalla, por lo que los valores de duration y message aún no están disponibles.
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //Esto se ejecuta cada vez que cambian las propiedades de entrada, incluyendo la primera vez que se asignan.
    console.log('ngOnChanges called with changes:', changes);
    console.log('-'.repeat(10));
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      console.log('Duration changed:', duration.currentValue);
    }
  }

  ngOnInit() {
    //Esto se ejecuta después de que Angular haya inicializado todas las propiedades de entrada, por lo que los valores de duration y message ya están disponibles. Sirve más para async , then, subscribe, etc.
    console.log('ngOnInit called');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update((value) => value + 1);
    }, this.duration);

  }

  ngAfterViewInit() {
    //Esto se ejecuta después de que Angular haya inicializado la vista del componente, lo que significa que el DOM ya está disponible. Es útil para interactuar con elementos del DOM o realizar tareas que requieren que la vista esté completamente renderizada.
    console.log('ngAfterViewInit called');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    //Esto se ejecuta justo antes de que Angular destruya el componente, lo que es útil para limpiar recursos, cancelar suscripciones o realizar cualquier tarea de limpieza necesaria.
    console.log('ngOnDestroy called');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
    
  }

  doSomething() {
    console.log('Doing something...');
  }


}
