import { env } from "app/config/env";

import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class ServiceProductRepository implements ProductRepository {
  async getAll(): Promise<Product[]> {
    try {
      const request = await fetch(`${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
        headers: new Headers({
          'X-Shopify-Access-Token': env.SHOPIFY_API_KEY,
        })
      })

      const { products } = await request.json()
      return products;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}