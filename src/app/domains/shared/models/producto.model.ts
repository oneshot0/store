import { Category } from "./category.model";

export interface Producto {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  creationAt: string;
  category: Category;
}
