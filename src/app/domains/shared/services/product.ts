import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  private http = inject(HttpClient);

  getProduct() {
    return this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products');
  }

  getOne(id: string) {
    return this.http.get<Producto>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }


}
