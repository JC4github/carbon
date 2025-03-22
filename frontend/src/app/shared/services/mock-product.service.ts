import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class MockProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Carbon Fiber Hood',
      description:
        'High-quality carbon fiber hood with perfect fitment and UV protection.',
      price: 899.99,
      imageUrl: 'assets/images/products/hood.jpg',
      category: 'Exterior',
      rating: 4.8,
      reviews: 124,
      stockStatus: 'in_stock',
      specifications: {
        Material: 'Carbon Fiber',
        Weight: '4.5 kg',
        Finish: 'UV Protected Clear Coat',
      },
      features: [
        'Perfect OEM fitment',
        'UV protected finish',
        'Weight reduction',
        'Improved aerodynamics',
      ],
    },
    {
      id: 2,
      name: 'Carbon Fiber Wing',
      description:
        'Aerodynamic carbon fiber wing with adjustable angle settings.',
      price: 1299.99,
      imageUrl: 'assets/images/products/wing.jpg',
      category: 'Aerodynamics',
      rating: 4.9,
      reviews: 89,
      stockStatus: 'in_stock',
      specifications: {
        Material: 'Carbon Fiber',
        Weight: '2.8 kg',
        'Adjustment Range': '0-15 degrees',
      },
      features: [
        'Adjustable angle',
        'Quick-release mounting',
        'Wind tunnel tested',
        'High downforce design',
      ],
    },
    {
      id: 3,
      name: 'Carbon Fiber Interior Trim Kit',
      description: 'Complete interior trim kit with carbon fiber accents.',
      price: 599.99,
      imageUrl: 'assets/images/products/interior-trim.jpg',
      category: 'Interior',
      rating: 4.7,
      reviews: 156,
      stockStatus: 'out_of_stock',
      specifications: {
        Material: 'Carbon Fiber',
        Pieces: '12',
        Finish: '3K Weave',
      },
      features: [
        'Complete trim set',
        'OEM fitment',
        'UV resistant',
        'Easy installation',
      ],
    },
    {
      id: 4,
      name: 'Carbon Fiber Mirror Caps',
      description:
        'Replacement mirror caps in carbon fiber with integrated indicators.',
      price: 299.99,
      imageUrl: 'assets/images/products/mirror-caps.jpg',
      category: 'Exterior',
      rating: 4.6,
      reviews: 78,
      stockStatus: 'in_stock',
      specifications: {
        Material: 'Carbon Fiber',
        Weight: '0.3 kg',
        Finish: 'Gloss',
      },
      features: [
        'LED indicators',
        'Heated mirror compatible',
        'Perfect fitment',
        'UV protected',
      ],
    },
    {
      id: 5,
      name: 'Carbon Fiber Shift Knob',
      description:
        'Weighted carbon fiber shift knob with custom engraving option.',
      price: 199.99,
      imageUrl: 'assets/images/products/shift-knob.jpg',
      category: 'Interior',
      rating: 4.5,
      reviews: 92,
      stockStatus: 'in_stock',
      specifications: {
        Material: 'Carbon Fiber',
        Weight: '0.2 kg',
        'Thread Size': 'M12x1.25',
      },
      features: [
        'Weighted design',
        'Custom engraving available',
        'Universal fitment',
        'Anti-slip surface',
      ],
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return of(this.products.find((product) => product.id === id));
  }

  getCategories(): Observable<string[]> {
    const categories = [
      ...new Set(this.products.map((product) => product.category)),
    ];
    return of(categories);
  }
}
