import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/ProductModel';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/interfaces/CartItemModel';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // get Products
  products: Product[] = [];
  http = inject(HttpClient);
  apiUrl = 'https://fakestoreapi.com/products';

  addProduct(product: Product) {
    this.products.push(product);
  }

  getProductsCreated(): Product[] {
    return this.products;
  }

  getApiProd(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  setNewProd(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  //Cart
  cart: CartItem[] = [];

  addToCart(product: Product): void {
    const existingItem = this.cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  removeFromCart(ProductId: number): void {
    this.cart = this.cart.filter((item) => item.id !== ProductId);
  }

  increaseQuantity(productId: number): void {
    const item = this.cart.find((item) => item.id === productId);
    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(productId: number): void {
    const item = this.cart.find((item) => item.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce((t, i) => t + i.price * i.quantity, 0);
  }

  getTotalItems(): number {
    return this.cart.reduce((t, i) => t + i.quantity, 0);
  }

  clearCart(): void {
    this.cart = [];
  }
}
