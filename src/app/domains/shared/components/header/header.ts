import { Component, EventEmitter, Input, Output, signal,SimpleChanges } from '@angular/core';
import { Producto } from '../..//models/producto.model';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  hideSideMenu = signal(true);
  //Aquí este @Input() es para recibir el carrito desde el componente padre (List) de forma requerida
  @Input({required: true}) cart: Producto[] = [];
  //Aquí este @Output() es para emitir el evento de eliminación de un producto del carrito al componente padre (List)
  @Output() removeFromCart = new EventEmitter<number>();
  total = signal(0);

  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  //COMENTARIO: Este método emite al componente padre el índice del producto que se eliminará del carrito.
  removeProduct(index: number) {
    this.removeFromCart.emit(index);
  }
  //RECORDAR que esta sería la mejor práctica para calcular el total cada vez que el carrito cambie, ya que se ejecutará automáticamente al detectar cambios en el carrito.
  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if (cart) {
      this.total.set(this.calcTotal());
    }
  }

  //COMENTARIO: Este método calcula el total sumando los precios de los productos en el carrito utilizando el método reduce() del array. Se llama cada vez que el carrito cambia para actualizar el total mostrado en el header.
  calcTotal() {
    return this.cart.reduce((sum, product) => sum + product.price, 0);
  }


}
