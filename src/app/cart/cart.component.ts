import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';
import {Product} from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  items = this.cartService.getItems();

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  checkOutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    this.items = this.cartService.clearItems();
    console.warn("Your order has been submitted", this.checkOutForm.value);
    this.checkOutForm.reset();
  }

  deleteItem(product: Product) {
    this.cartService.deleteItem(product);
    window.alert("Product deleted from cart successfully");
  }

}
