import { Injectable } from '@angular/core';
import {Product} from './products';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }

  deleteItem(product: Product) {
    const index = this.items.indexOf(product);
    this.items.splice(index, 1);
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  constructor(private http: HttpClient) { }
}
