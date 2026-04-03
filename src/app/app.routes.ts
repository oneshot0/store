import { Routes } from '@angular/router';

import { List } from './domains/products/pages/list/list';
import { ProductDetail } from '@products/pages/product-detail/product-detail';
import { Layout } from '@shared/components/layout/layout';
import { About } from '@info/pages/about/about';
import { NotFound } from '@info/pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '', component: List
      },
      {
        path: 'about', component: About
      },
      {
        path: 'product/:id', component: ProductDetail
      }

    ]
  },
  {
    path: '**',
    component: NotFound
  }
];
