import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonThumbnail,
} from '@ionic/angular/standalone';
import { Product } from 'src/app/interfaces/ProductModel';
import { CartItem } from 'src/app/interfaces/CartItemModel';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [CommonModule, IonList, IonItem, IonLabel, IonButton, IonThumbnail],
})
export class ProductListComponent {
  @Input() products: (Product | CartItem)[] = [];

  @Input() context: 'market' | 'cart' | 'create-product' = 'market';

  @Output() addToCart = new EventEmitter<Product>();
  @Output() removeFromCart = new EventEmitter<Product>();
  @Output() increaseQuantity = new EventEmitter<Product>();
  @Output() decreaseQuantity = new EventEmitter<Product>();

  constructor() {}
}
