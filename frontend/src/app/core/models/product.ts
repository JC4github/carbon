export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  images: string[];
  specifications: {
    weight?: number; // in grams
    dimensions?: {
      length: number;
      width: number;
      height: number;
    };
    material: string;
    finish?: string;
  };
  stockQuantity: number;
  rating?: number;
  reviews?: ProductReview[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date; // for soft delete
}

export interface ProductReview {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export enum ProductCategory {
  AUTOMOTIVE = 'AUTOMOTIVE',
  MOTORCYCLE = 'MOTORCYCLE',
  BICYCLE = 'BICYCLE',
  ACCESSORIES = 'ACCESSORIES',
  LIFESTYLE = 'LIFESTYLE',
  CUSTOM = 'CUSTOM',
}
