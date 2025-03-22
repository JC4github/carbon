export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviews: number;
  stockStatus: 'in_stock' | 'out_of_stock';
  specifications?: {
    [key: string]: string;
  };
  features?: string[];
}
