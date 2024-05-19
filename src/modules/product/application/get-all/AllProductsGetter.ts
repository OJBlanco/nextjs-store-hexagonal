import { Product } from "../../domain/Product";
import { ProductRepository } from "../../domain/ProductRepository";

export class AllProductsGetter {
  constructor(private readonly repository: ProductRepository) { }

  async get(): Promise<Product[]> {
    return this.repository.getAll();
  }
}