import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/interfaces/CartItemModel';
import { Product } from 'src/app/interfaces/ProductModel';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:CartItem[]=[]


  addToCart(product:Product):void{
    const existingItem=this.cart.find(item=>item.id===product.id)

    if (existingItem){
      existingItem.quantity++;
    }else{
      this.cart.push({...product,quantity:1})
    }
  }

  getCartItems():CartItem[]{
    return this.cart;

  }

  removeFromCart(ProductId:number):void{
    this.cart=this.cart.filter(item=>item.id!==ProductId)


  }


  increaseQuantity(productId: number): void {
    const item = this.cart.find(item => item.id === productId);
    if (item) {
      item.quantity++;
    }
  }


  decreaseQuantity(productId: number): void {
    const item = this.cart.find(item => item.id === productId);
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
