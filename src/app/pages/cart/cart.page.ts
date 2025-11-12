import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/angular/standalone';
import { Product } from 'src/app/interfaces/ProductModel';
import { CartItem } from 'src/app/interfaces/CartItemModel';
// import { ProductService } from 'src/app/data/services/cart-service';

import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { ProductService } from 'src/app/data/services/product-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ProductListComponent,
    IonButton,
  ],
})
export class CartPage implements OnInit {
  constructor() {}
  private ProductService = inject(ProductService);

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalItems: number = 0;

  ngOnInit() {
    this.loadCart();
  }

  ionViewWillEnter() {
    // this.loadCart();
  }

  loadCart() {
    this.cartItems = this.ProductService.getCartItems();
    this.totalPrice = this.ProductService.getTotalPrice();
    this.totalItems = this.ProductService.getTotalItems();
  }

  handleRemove(product: Product) {
    this.ProductService.removeFromCart(product.id);
    this.loadCart();
  }

  handleIncrease(product: Product) {
    this.ProductService.increaseQuantity(product.id);
    this.loadCart();
  }

  handleDecrease(product: Product) {
    this.ProductService.decreaseQuantity(product.id);
    this.loadCart();
  }
  handleClearCart() {
    this.ProductService.clearCart();
    this.loadCart();
  }
}
