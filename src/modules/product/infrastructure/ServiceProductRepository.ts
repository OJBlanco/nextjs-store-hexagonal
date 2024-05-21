import { env } from "app/config/env";

import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class ServiceProductRepository implements ProductRepository {
  private readonly headers = new Headers({
    'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
  })

  async getAll(): Promise<Product[]> {
    try {
      const request = await fetch(`${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
        headers: this.headers,
      })

      const { products } = await request.json()
      return products;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async getProductsByCollectionId(id: number): Promise<Product[]> {
    try {
      const request = await fetch(`${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/collections/${id}/products.json`, {
        headers: this.headers,
      })

      const { products } = await request.json()
      return products;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}