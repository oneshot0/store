import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule, CurrencyPipe, UpperCasePipe, DatePipe } from '@angular/common';
import { Producto } from '@shared/models/producto.model';
import { ReversePipe } from '@shared/pipes/reverse-pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago-pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, UpperCasePipe, DatePipe, ReversePipe, TimeAgoPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input({required: true}) product!: Producto ;
  // @Input({required: true}) nombre: string = '';
  // @Input({required: true}) precio: number = 0;

  @Output() addToCart = new EventEmitter();

  //Aquí agregaremos el método para emitir el evento al hacer clic en el botón "Agregar al carrito"
  addToCartHandler() {
    this.addToCart.emit(this.product);
  }
}
