import { Component, Input, EventEmitter, Output } from '@angular/core';
import { required } from '@angular/forms/signals';


@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input({required: true}) img: string = '';
  @Input({required: true}) nombre: string = '';
  @Input({required: true}) precio: number = 0;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log(`Producto agregado al carrito: ${this.nombre}`);
    this.addToCart.emit('Hola este es un mensaje desde el hijo');
  }
}
