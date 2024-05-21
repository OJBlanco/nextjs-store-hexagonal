export interface ProductVariant {
  id: number;
  product_id: number;
  title: string;
  price: string;
  sku?: null;
  position: number;
  inventory_policy: string;
  compare_at_price: string;
  fulfillment_service: string;
  inventory_management?: null;
  option1: string;
  option2?: null;
  option3?: null;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode?: null;
  grams: number;
  weight: number;
  weight_unit: string;
  inventory_item_id: number;
  inventory_quantity: number;
  old_inventory_quantity: number;
  requires_shipping: boolean;
  admin_graphql_api_id: string;
  image_id?: null;
}