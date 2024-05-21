import { Product } from "./Product";

export interface ProductRepository {
  getAll: () => Promise<Product[]>;
  getProductsByCollectionId: (id: number) => Promise<Product[]>;
}