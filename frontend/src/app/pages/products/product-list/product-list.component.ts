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
import { Product } from '../../../shared/models/product.model';

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
  ) {
    console.log('ProductListComponent constructed');
  }

  ngOnInit() {
    console.log('ProductListComponent initialized');
    // Get category from route query params, default to null for "All Products"
    this.route.queryParams.subscribe((params) => {
      console.log('Route params:', params);
      this.selectedCategory = params['category'] || null;
      this.loadProducts();
    });

    // Load categories
    this.productService.getCategories().subscribe({
      next: (categories) => {
        console.log('Categories loaded:', categories);
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error loading categories:', error);
        this.error = 'Failed to load categories';
      },
    });
  }

  loadProducts() {
    console.log('Loading products, category:', this.selectedCategory);
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        console.log('Products loaded:', products);
        this.products = products;
        this.filterProducts();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading products:', error);
        this.error = 'Failed to load products';
        this.loading = false;
      },
    });
  }

  selectCategory(category: string | null) {
    console.log('Category selected:', category);
    this.selectedCategory = category;
    this.filterProducts();
  }

  filterProducts() {
    console.log('Filtering products, search query:', this.searchQuery);
    let filtered = this.products;

    // Apply category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === this.selectedCategory
      );
    }

    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    this.filteredProducts = filtered;
    console.log('Filtered products:', this.filteredProducts);
  }

  onSearch() {
    this.filterProducts();
  }
}
