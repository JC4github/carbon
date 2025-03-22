import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductCategory } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Temporary mock data until we have a backend
  private mockProducts: Product[] = [
    {
      id: '1',
      name: 'Carbon Fiber Hood - BMW M3',
      description:
        'Lightweight carbon fiber hood replacement for BMW M3. Perfect fitment and UV-protected clear coat finish.',
      price: 899.99,
      category: ProductCategory.AUTOMOTIVE,
      images: ['assets/images/products/bmw-hood.jpg'],
      specifications: {
        weight: 4500,
        dimensions: {
          length: 1500,
          width: 1200,
          height: 100,
        },
        material: '2x2 Twill Carbon Fiber',
        finish: 'Glossy Clear Coat',
      },
      stockQuantity: 5,
      rating: 4.8,
      reviews: [],
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Add more mock products here
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.mockProducts);
  }

  getProduct(id: string): Observable<Product | undefined> {
    return of(this.mockProducts.find((product) => product.id === id));
  }

  getProductsByCategory(category: ProductCategory): Observable<Product[]> {
    return of(
      this.mockProducts.filter((product) => product.category === category)
    );
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of(this.mockProducts.filter((product) => product.featured));
  }

  searchProducts(query: string): Observable<Product[]> {
    const lowercaseQuery = query.toLowerCase();
    return of(
      this.mockProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(lowercaseQuery) ||
          product.description.toLowerCase().includes(lowercaseQuery)
      )
    );
  }
}
