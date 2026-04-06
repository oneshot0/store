import { Component, inject, Input, signal } from '@angular/core';
import { Producto } from '@shared/models/producto.model';
import { ProductService } from '@shared/services/product';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product } from '@products/components/product/product';
import { CartService } from '@shared/services/cart';




@Component({
  selector: 'app-product-detail',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export default class ProductDetail {

  @Input() id?: string;
  product = signal<Producto | null>(null);
  //creamos un signal exclusivo para la imagen de portada del producto, lo que nos permitirá manejarla de manera independiente y actualizarla sin afectar el resto de los detalles del producto.
  cover = signal('');
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  //Aquí lo que hacemos es usar el ciclo de vida ngOnInit para cargar los detalles del producto cuando el componente se inicializa. Verificamos si el id está presente y luego llamamos al servicio para obtener los detalles del producto, actualizando la señal con la respuesta.
  ngOnInit() {
    if (this.id) {
      this.productService.getOne(this.id).subscribe({
        //.subscribe y next son parte de la API de RxJS para manejar las respuestas asíncronas. En este caso, cuando se recibe la respuesta del servicio, se actualiza la señal product con los detalles del producto obtenido. Además, si el producto tiene imágenes, se establece la primera imagen como la portada utilizando la señal cover.
        next: (product) => {
          this.product.set(product);
          if(product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
        }
      });
    }
  }

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addToCart(product);
    }
  }



}
