import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems.asObservable();
  }

  getCartCount(): Observable<number> {
    return new Observable((subscriber) => {
      this.cartItems.subscribe((items) => {
        const count = items.reduce((total, item) => total + item.quantity, 0);
        subscriber.next(count);
      });
    });
  }

  addToCart(product: Product, quantity: number = 1): void {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      currentItems.push({ product, quantity });
    }

    this.cartItems.next([...currentItems]);
  }

  removeFromCart(productId: number): void {
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.filter(
      (item) => item.product.id !== productId
    );
    this.cartItems.next(updatedItems);
  }

  updateQuantity(productId: number, quantity: number): void {
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity };
      }
      return item;
    });
    this.cartItems.next(updatedItems);
  }

  clearCart(): void {
    this.cartItems.next([]);
  }

  getTotal(): Observable<number> {
    return new Observable((subscriber) => {
      this.cartItems.subscribe((items) => {
        const total = items.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );
        subscriber.next(total);
      });
    });
  }
}
