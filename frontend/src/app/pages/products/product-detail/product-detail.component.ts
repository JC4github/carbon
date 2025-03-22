import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../services/product.service';
import { CartService } from '../../../shared/services/cart.service';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  loading = true;
  error: string | null = null;

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);
  private readonly snackBar = inject(MatSnackBar);

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(productId)) {
      this.loadProduct(productId);
    } else {
      this.error = 'Invalid product ID';
      this.loading = false;
    }
  }

  private loadProduct(id: number) {
    this.loading = true;
    this.error = null;

    this.productService.getProduct(id).subscribe({
      next: (product) => {
        if (product) {
          this.product = product;
        } else {
          this.error = 'Product not found';
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load product details. Please try again later.';
        console.error('Error loading product:', error);
        this.loading = false;
      },
    });
  }

  addToCart() {
    if (this.product && this.product.stockStatus === 'in_stock') {
      this.cartService.addToCart(this.product);
      this.snackBar.open('Product added to cart', 'Close', {
        duration: 3000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
  }

  getSpecifications(): { key: string; value: string }[] {
    if (!this.product?.specifications) {
      return [];
    }
    return Object.entries(this.product.specifications).map(([key, value]) => ({
      key,
      value: String(value),
    }));
  }
}
