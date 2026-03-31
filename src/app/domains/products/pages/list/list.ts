import { Component, signal } from '@angular/core';
import { Product } from './../../components/product/product';
import { Producto } from './../../../shared/models/producto.model';
import { Header } from './../../../shared/components/header/header';

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  products = signal<Producto[]>([]);
  cart = signal<Producto[]>([]);

  constructor() {
    const initProductos: Producto[] = [
      {
        id: Date.now(),
        name: 'Producto 1',
        price: 10,
        img: 'https://picsum.photos/300/300?r=1',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        name: 'Producto 2',
        price: 20,
        img: 'https://picsum.photos/300/300?r=2',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        name: 'Producto 3',
        price: 30,
        img: 'https://picsum.photos/300/300?r=3',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        name: 'Producto 4',
        price: 40,
        img: 'https://picsum.photos/300/300?r=4',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        name: 'Producto 5',
        price: 50,
        img: 'https://picsum.photos/300/300?r=5',
        creationAt: new Date().toISOString(),
      },
      {
        id: Date.now(),
        name: 'Producto 6',
        price: 60,
        img: 'https://picsum.photos/300/300?r=6',
        creationAt: new Date().toISOString(),
      },
    ];
    this.products.set(initProductos);
  }

  //En esta parte recibimos el producto emitido desde el componente hijo (Product) y lo agregamos al carrito utilizando el método update() del signal cart
  addToCart(product: Producto) {
    this.cart.update((prevState) => [...prevState, product]);
  }

  //COMENTARIO: Este método elimina del signal cart el producto según el índice recibido desde el header.
  removeFromCart(index: number) {
    this.cart.update((prevState) => prevState.filter((_, i) => i !== index));
  }
}
