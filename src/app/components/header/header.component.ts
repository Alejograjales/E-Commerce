import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
 
})
export class HeaderComponent  {
  @Input() cart: any;

  constructor(private cartService: CartService) { }

  getTotal(items: Array<CartItem>): number { 
    return this.cartService.getTotal(items);
  }

  onClearCart() { 
    this.cartService.clearCart();
  }
}