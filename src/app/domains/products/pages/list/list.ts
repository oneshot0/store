import { Component, inject, signal } from '@angular/core';
import { Product } from './../../components/product/product';
import { Producto } from './../../../shared/models/producto.model';
import { Header } from './../../../shared/components/header/header';
import { CartService } from '../../../shared/services/cart';
import { ProductService } from '../../../shared/services/product';

@Component({
  selector: 'app-list',
  imports: [Product, Header],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  products = signal<Producto[]>([]);
  private cartServices = inject(CartService)
  private productServices = inject(ProductService)

  //Esto ya no es necesario por la responsabilidad del servicio CartService, que se encargará de manejar el estado del carrito y el total.
  // cart = signal<Producto[]>([]);

  ngOnInit() {
    this.productServices.getProduct()
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  //En esta parte recibimos el producto emitido desde el componente hijo (Product) y lo agregamos al carrito utilizando el método update() del signal cart
  addToCart(product: Producto) {
    this.cartServices.addToCart(product);
  }

  //COMENTARIO: Este método elimina del signal cart el producto según el índice recibido desde el header.
  removeFromCart(index: number) {
    this.cartServices.removeProduct(index);
  }
}
