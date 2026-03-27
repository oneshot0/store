import { Component } from '@angular/core';
import { Product } from "./../../components/product/product";

@Component({
  selector: 'app-list',
  imports: [Product],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  fromchild(event: string) {
    console.log('Mensaje recibido en el padre:', event);
  }

}
