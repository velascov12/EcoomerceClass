import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/ProductModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
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
}
