import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory: string | null = null;
  searchQuery: string = '';
  loading = true;
  error: string | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get category from route query params
    this.route.queryParams.subscribe((params) => {
      this.selectedCategory = params['category'] || null;
      this.loadProducts();
    });

    // Load categories
    this.productService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        this.error = 'Failed to load categories';
        console.error('Error loading categories:', error);
      },
    });
  }

  loadProducts() {
    this.loading = true;
    this.productService
      .getProducts(this.selectedCategory || undefined)
      .subscribe({
        next: (products) => {
          this.products = products;
          this.filterProducts();
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to load products';
          console.error('Error loading products:', error);
          this.loading = false;
        },
      });
  }

  selectCategory(category: string | null) {
    this.selectedCategory = category;
    this.loadProducts();
  }

  filterProducts() {
    if (!this.searchQuery.trim()) {
      this.filteredProducts = this.products;
      return;
    }

    const query = this.searchQuery.toLowerCase().trim();
    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
  }

  onSearch() {
    this.filterProducts();
  }
}
