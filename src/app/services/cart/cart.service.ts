import { Injectable } from '@angular/core';
import { Product } from 'src/app/Api/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  // Methods
  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // function getShippingPrices
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>
    ('/assets/shipping.json')
  }
}
