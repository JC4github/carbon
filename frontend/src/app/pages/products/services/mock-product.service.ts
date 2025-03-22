import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class MockProductService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Carbon Fiber Hood',
      description:
        'High-quality carbon fiber hood with perfect fitment for your vehicle. Features a UV-resistant clear coat and lightweight construction.',
      price: 599.99,
      imageUrl:
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop&q=60',
      category: 'Exterior',
      rating: 4.8,
      reviews: 156,
      inStock: true,
      specifications: {
        material: 'Carbon Fiber',
        dimensions: '60" x 48" x 2"',
        weight: '8 lbs',
        compatibility: ['Toyota Supra', 'Nissan GT-R', 'Honda Civic'],
      },
      features: [
        'UV-resistant clear coat',
        'Perfect OEM fitment',
        'Weight reduction of 40%',
        'Includes mounting hardware',
        '2-year warranty',
      ],
    },
    {
      id: '2',
      name: 'Carbon Fiber Wing',
      description:
        'Aerodynamic carbon fiber wing designed for maximum downforce. Features adjustable angle and quick-release mounting system.',
      price: 799.99,
      imageUrl:
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop&q=60',
      category: 'Aerodynamics',
      rating: 4.9,
      reviews: 89,
      inStock: true,
      specifications: {
        material: 'Carbon Fiber',
        dimensions: '72" x 12" x 4"',
        weight: '5 lbs',
        compatibility: ['Porsche 911', 'BMW M3', 'Mercedes AMG'],
      },
      features: [
        'Adjustable angle (0-15 degrees)',
        'Quick-release mounting system',
        'Wind-tunnel tested',
        'Includes installation kit',
        'Lifetime warranty',
      ],
    },
    {
      id: '3',
      name: 'Carbon Fiber Interior Trim Kit',
      description:
        'Complete interior trim kit made from genuine carbon fiber. Includes door handles, center console, and dashboard trim pieces.',
      price: 449.99,
      imageUrl:
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop&q=60',
      category: 'Interior',
      rating: 4.7,
      reviews: 234,
      inStock: false,
      specifications: {
        material: 'Carbon Fiber',
        dimensions: 'Various',
        weight: '3 lbs',
        compatibility: ['Audi A4', 'BMW 3 Series', 'Mercedes C-Class'],
      },
      features: [
        'OEM-style fitment',
        'UV-resistant finish',
        'Includes all necessary hardware',
        'Easy installation',
        '1-year warranty',
      ],
    },
    {
      id: '4',
      name: 'Carbon Fiber Mirror Caps',
      description:
        'Lightweight carbon fiber mirror caps with perfect fitment. Includes heated mirror elements and turn signal indicators.',
      price: 199.99,
      imageUrl:
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop&q=60',
      category: 'Exterior',
      rating: 4.6,
      reviews: 178,
      inStock: true,
      specifications: {
        material: 'Carbon Fiber',
        dimensions: '8" x 4" x 2"',
        weight: '0.5 lbs',
        compatibility: ['Volkswagen Golf', 'Audi A3', 'BMW 1 Series'],
      },
      features: [
        'Heated mirror elements',
        'LED turn signals',
        'Perfect OEM fitment',
        'Includes wiring harness',
        '2-year warranty',
      ],
    },
    {
      id: '5',
      name: 'Carbon Fiber Shift Knob',
      description:
        'Ergonomically designed carbon fiber shift knob with aluminum core for perfect weight distribution.',
      price: 129.99,
      imageUrl:
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop&q=60',
      category: 'Interior',
      rating: 4.5,
      reviews: 92,
      inStock: true,
      specifications: {
        material: 'Carbon Fiber with Aluminum Core',
        dimensions: '2" diameter x 3" height',
        weight: '0.3 lbs',
        compatibility: ['Universal Fit'],
      },
      features: [
        'Ergonomic design',
        'Perfect weight distribution',
        'Universal thread adapter included',
        'Easy installation',
        '1-year warranty',
      ],
    },
  ];

  private categories: string[] = ['Exterior', 'Aerodynamics', 'Interior'];

  getProducts(category?: string): Observable<Product[]> {
    if (category) {
      return of(
        this.products.filter((product) => product.category === category)
      );
    }
    return of(this.products);
  }

  getProductById(id: string): Observable<Product> {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return of(product);
  }

  getCategories(): Observable<string[]> {
    return of(this.categories);
  }
}
