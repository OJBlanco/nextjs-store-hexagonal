import { Product } from "../../domain/Product";
import { ProductRepository } from "../../domain/ProductRepository";

export class ProductGetter {
  constructor(private readonly repository: ProductRepository) { }

  async get(id: number): Promise<Product> {
    return this.repository.get(id)
  }
}