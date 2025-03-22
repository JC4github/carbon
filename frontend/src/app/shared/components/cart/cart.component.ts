import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  cartCount = 0;
  cartTotal = 0;

  private readonly cartService = inject(CartService);

  ngOnInit() {
    // Subscribe to cart updates
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });

    this.cartService.getCartCount().subscribe((count) => {
      this.cartCount = count;
    });

    this.cartService.getTotal().subscribe((total) => {
      this.cartTotal = total;
    });
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
