import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  hideSideMenu = signal(true);
  private cartServices = inject(CartService);
  cart = this.cartServices.cart;
  total = this.cartServices.total;
  

  toggleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

  //COMENTARIO: Este método elimina un producto del carrito usando su índice y delega la lógica al servicio.
  removeProduct(index: number) {
    this.cartServices.removeProduct(index);
  }
}
