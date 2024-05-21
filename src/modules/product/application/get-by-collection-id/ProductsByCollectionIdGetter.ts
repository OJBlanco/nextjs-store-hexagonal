import { ProductRepository } from "../../domain/ProductRepository";

export class ProductsByCollectionIdGetter {
  constructor(private readonly repository: ProductRepository) {}

  async getByCollectionId (id: number) {
    return this.repository.getProductsByCollectionId(id)
  }
}