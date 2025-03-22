import { Injectable } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ProductService {
  abstract getProducts(): Observable<Product[]>;
  abstract getProduct(id: number): Observable<Product | undefined>;
  abstract getCategories(): Observable<string[]>;
}
