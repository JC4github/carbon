export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  specifications: {
    material: string;
    dimensions: string;
    weight: string;
    compatibility: string[];
  };
  features: string[];
}
