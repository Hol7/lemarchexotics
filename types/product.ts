// src/types/product.ts
export type Product = {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  image_url?: string | null;
  category_id: string;
  is_available: boolean;
  created_at?: string;
};
// src/types/delivery.ts
export type DeliveryZone = {
  id: string
  name: string
  frequency: 'weekly' | 'monthly'
  delivery_amount: number
  description?: string
}
