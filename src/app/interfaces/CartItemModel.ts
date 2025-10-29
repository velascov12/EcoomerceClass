import { Product } from './ProductModel';

export interface CartItem extends Product{
    quantity:number;
}
