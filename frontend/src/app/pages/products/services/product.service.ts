import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Carbon Fiber Front Splitter',
      description:
        'High-performance front splitter designed for improved aerodynamics and aggressive styling.',
      price: 299.99,
      category: 'AUTOMOTIVE',
      imageUrl: 'assets/images/products/splitter.jpg',
      specifications: {
        material: 'Carbon Fiber',
        dimensions: '1800mm x 150mm',
        weight: '2.5 kg',
        compatibility: ['BMW M3', 'BMW M4'],
      },
      features: [
        'Pre-preg carbon fiber construction',
        'UV resistant coating',
        'Direct bolt-on installation',
        'Includes mounting hardware',
      ],
      inStock: true,
      rating: 4.8,
      reviews: 24,
    },
    {
      id: '2',
      name: 'Carbon Fiber Side Skirts',
      description:
        "Stylish side skirts that enhance the vehicle's profile while improving aerodynamics.",
      price: 249.99,
      category: 'AUTOMOTIVE',
      imageUrl: 'assets/images/products/side-skirts.jpg',
      specifications: {
        material: 'Carbon Fiber',
        dimensions: '1200mm x 100mm',
        weight: '1.8 kg',
        compatibility: ['BMW M3', 'BMW M4'],
      },
      features: [
        '2x2 carbon fiber weave',
        'UV protected finish',
        'Easy installation',
        'Includes mounting brackets',
      ],
      inStock: true,
      rating: 4.6,
      reviews: 18,
    },
    {
      id: '3',
      name: 'Carbon Fiber Phone Case',
      description:
        'Premium carbon fiber phone case offering superior protection and style.',
      price: 49.99,
      category: 'ACCESSORIES',
      imageUrl: 'assets/images/products/phone-case.jpg',
      specifications: {
        material: 'Carbon Fiber',
        dimensions: '150mm x 75mm',
        weight: '0.2 kg',
        compatibility: ['iPhone 15 Pro', 'iPhone 15 Pro Max'],
      },
      features: [
        'Military-grade protection',
        'Wireless charging compatible',
        'Anti-yellowing coating',
        'Lifetime warranty',
      ],
      inStock: true,
      rating: 4.9,
      reviews: 156,
    },
  ];

  getProducts(category?: string): Observable<Product[]> {
    throw new Error('Method not implemented.');
  }

  getProductById(id: string): Observable<Product> {
    throw new Error('Method not implemented.');
  }

  getCategories(): Observable<string[]> {
    throw new Error('Method not implemented.');
  }
}
