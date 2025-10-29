import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Product } from 'src/app/interfaces/ProductModel';
import { CreateProductComponent } from 'src/app/components/create-product/create-product.component';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ProductService } from 'src/app/data/services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CreateProductComponent,
    ProductListComponent,
  ],
})
export class CreateProductPage {
  private productService = inject(ProductService);

  products: Product[] = [];

  ngOnInit() {
    this.products = this.productService.getProductsCreated();
  }

  addProduct(product: Product) {
    this.productService.setNewProd(product).subscribe({
      next: (newProduct) => {
        alert(`producto agregado correctamente: ${newProduct.title}`);
        this.productService.addProduct(newProduct);
      },
      error: (error) => {
        console.error('Error creando producto:', error);
      },
    });
  }
}
