import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<any> = [];
  constructor() {
    this.readLocal();    
  }

  getCart(): Array<any> {
    this.readLocal();
    return this.cart;
  }

  addProduct(product: any, quantity: number): void {
    this.cart.push({
      ...product, quantity
    });
    this.saveLocal();
  }

  updateQuantity(id: number, quantity: number): void {
    this.cart.find((i: any) => i.id = id).quantity = quantity;
    this.saveLocal();
  }

  removeProduct(id: number): void {
    this.cart = this.cart.filter((i: any) => i.id != id);
    this.saveLocal();
  }

  removeAll():void {
    this.cart = this.cart.filter((i: any) => false);
    this.saveLocal();
  }

  getTotalPrice(): number {
    return this.cart.reduce((acc, cur) => acc + cur.price, 0);
  }
  
  saveLocal(): void {
    localStorage.setItem("BT-ANGULAR-CART", JSON.stringify(this.cart));
  }


  readLocal(): void {
    try {
      let str = localStorage.getItem("BT-ANGULAR-CART");
      if (str != null && str.length > 0) {
        this.cart = JSON.parse(str);
      }
    } catch (error) {
      console.log(error);
      this.cart = [];
    }
  }
}
