import { Component, Input, EventEmitter, Output } from '@angular/core';
import { required } from '@angular/forms/signals';
import { Producto } from './../../../shared/models/producto.model';

@Component({
  selector: 'app-product',
  imports: [],
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
