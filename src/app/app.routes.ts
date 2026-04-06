import { Routes } from '@angular/router';

import { Layout } from '@shared/components/layout/layout';
import { NotFound } from '@info/pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        //Esta es la forma de decirle al empaquetado de angular que cargue de forma perezosa el componente List cuando se navegue a la ruta raíz (''). Esto ayuda a mejorar el rendimiento de la aplicación al cargar solo el código necesario para esa ruta específica en lugar de cargar todo el código de la aplicación de una vez.
        path: '',
        loadComponent: () => import('./domains/products/pages/list/list')
      },
      {
        path: 'about', 
        loadComponent: () => import('./domains/info/pages/about/about')
      },
      {
        path: 'product/:id', 
        loadComponent: () => import('./domains/products/pages/product-detail/product-detail')
      }

    ]
  },
  {
    path: '**',
    component: NotFound
  }
];
