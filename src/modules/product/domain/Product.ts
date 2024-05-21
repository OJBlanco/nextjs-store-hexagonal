import { ProductImage } from "./ProductImage"
import { ProductVariant } from "./ProductVariant";

export interface Product {
  id: number;
  title: string;
  body_html: string;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string | null;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  images: ProductImage[];
  image: ProductImage;
  price: number;
  variants: ProductVariant[];
}