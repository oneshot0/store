import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  private http = inject(HttpClient);

  //Aquí el cambio que hicimos fue agregar un parámetro opcional category_id al método getProduct, y construir la URL utilizando la clase URL para agregar el parámetro de consulta categoryId si se proporciona. Esto permite que el método getProduct pueda filtrar los productos por categoría si se le pasa un category_id, o devolver todos los productos si no se proporciona ningún category_id.
  getProduct(category_id?: string) {
    const url = new URL('https://api.escuelajs.co/api/v1/products');
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<Producto[]>(url.toString());
  }

  getOne(id: string) {
    return this.http.get<Producto>(`https://api.escuelajs.co/api/v1/products/${id}`);
  }


}
