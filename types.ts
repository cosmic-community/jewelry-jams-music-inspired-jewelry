export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    category_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Variant extends CosmicObject {
  type: 'variants';
  metadata: {
    variant_name?: string;
    sku?: string;
    price_adjustment?: number;
    stock_quantity?: number;
    variant_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name?: string;
    description?: string;
    price?: number;
    sku?: string;
    inventory_status?: string | { key: string; value: string };
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    image_gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    category?: Category;
    variants?: Variant[];
    featured_product?: boolean;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    review_title?: string;
    customer_name?: string;
    rating?: number | { key: string; value: string };
    review_content?: string;
    product?: Product;
    verified_purchase?: boolean;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}