import { AdditionalService } from './../models/additionalService';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Injectable } from '@angular/core';
import { CartItems, CartItems2 } from '../models/cartItems';
import { CartItem, CartItem2 } from '../models/cartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _toastrService: ToastrService) {}

  addToCart(car: Car) {
    let item = CartItems.find((c) => c.car.id === car.id);
    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }
  addToCart2(additionalService: AdditionalService) {
    let item = CartItems2.find(
      (c) => c.additionalService.id === additionalService.id
    );
    if (item) {
    } else {
      let cartItem2 = new CartItem2();
      cartItem2.additionalService = additionalService;
      CartItems2.push(cartItem2);
    }
  }

  removeFromCart(car: Car) {
    let item: CartItem = CartItems.find((c) => c.car.id === car.id);
    CartItems.splice(CartItems.indexOf(item), 1);
  }

  list(): CartItem[] {
    return CartItems;
  }
  list2(): CartItem2[] {
    return CartItems2;
  }
}
