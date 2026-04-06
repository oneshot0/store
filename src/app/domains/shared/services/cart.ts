import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../products/components/product/product';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Producto[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, producto) => total + producto.price, 0);
  })

  constructor() {}
  

  addToCart(product: Producto) {
    this.cart.update((prevCart) => [...prevCart, product]);
  }

  removeProduct(index: number) {
    this.cart.update((prevCart) => prevCart.filter((_, i) => i !== index));
  }

}
