import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from './../../components/product/product';
import { Producto } from './../../../shared/models/producto.model';

import { CartService } from '../../../shared/services/cart';
import { ProductService } from '../../../shared/services/product';
import { Category } from '@shared/models/category.model';
import { CategoryService } from '@shared/services/category';

@Component({
  selector: 'app-list',
  imports: [Product, RouterLinkWithHref],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  products = signal<Producto[]>([]);
  categories = signal<Category[]>([]);
  private cartServices = inject(CartService)
  private productServices = inject(ProductService)
  private categoryService = inject(CategoryService)
  @Input() category_id?: string;

  //Esto ya no es necesario por la responsabilidad del servicio CartService, que se encargará de manejar el estado del carrito y el total.
  // cart = signal<Producto[]>([]);

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts()
  }

  //En esta parte recibimos el producto emitido desde el componente hijo (Product) y lo agregamos al carrito utilizando el método update() del signal cart
  addToCart(product: Producto) {
    this.cartServices.addToCart(product);
  }

  //COMENTARIO: Este método elimina del signal cart el producto según el índice recibido desde el header.
  removeFromCart(index: number) {
    this.cartServices.removeProduct(index);
  }

  private getProducts() {
    this.productServices.getProduct(this.category_id)
      .subscribe({
        next: (products) => {
          this.products.set(products);
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        }
      });
  }
  private getCategories() {
    this.categoryService.getAll()
      .subscribe({
        next: (data) => {
          this.categories.set(data);
        },
        error: (error) => {
          console.error('Error fetching categories:', error);
        }
      });
  }
}
