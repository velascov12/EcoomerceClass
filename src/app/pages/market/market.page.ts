import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
} from '@ionic/angular/standalone';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from 'src/app/interfaces/ProductModel';
import { ProductService } from 'src/app/data/services/product-service';
// import { ProductService } from 'src/app/data/services/cart-service';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { cart, cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
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
    IonButtons,
    IonIcon,
  ],
})
export class MarketPage implements OnInit {
  products: Product[] = [];

  newProducts: Product[] = [];

  private productService = inject(ProductService);
  private ProductService = inject(ProductService);

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadProducts();
  }

  ionViewWillEnter() {}

  handleAdd(product: Product) {
    this.ProductService.addToCart(product);
    window.alert('Producto agregado al carrito');
  }

  loadProducts() {
    this.productService.getApiProd().subscribe({
      next: (apiProducts) => {
        // this.products = [];

        this.newProducts = this.productService.getProductsCreated();

        for (let prod of apiProducts) {
          this.products.push(prod);
        }

        for (let p of this.newProducts) {
          this.products.push(p);
        }
      },
      error: (error) => {
        console.error('error al cargar productos del api: ', error);
        this.products = this.productService.getProductsCreated();
      },
    });
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
