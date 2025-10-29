import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,IonButton} from '@ionic/angular/standalone';
import { Product } from 'src/app/interfaces/ProductModel';
import { CartItem } from 'src/app/interfaces/CartItemModel';
import { CartService } from 'src/app/data/services/cart-service';

import { ProductListComponent } from 'src/app/components/product-list/product-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ProductListComponent,IonButton ]
})
export class CartPage implements OnInit {
 
  constructor() { }
    private cartService = inject(CartService);

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalItems: number = 0;

  ngOnInit() {
    this.loadCart();
  }

  ionViewWillEnter() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
    this.totalItems = this.cartService.getTotalItems();
  }

  handleRemove(product: Product) {
  this.cartService.removeFromCart(product.id);
  this.loadCart();
  }

  handleIncrease(product: Product) {
    this.cartService.increaseQuantity(product.id);
    this.loadCart();
  }

  handleDecrease(product: Product) {
    this.cartService.decreaseQuantity(product.id);
    this.loadCart();
  }
  handleClearCart() {
      this.cartService.clearCart();
      this.loadCart();
    }

}
