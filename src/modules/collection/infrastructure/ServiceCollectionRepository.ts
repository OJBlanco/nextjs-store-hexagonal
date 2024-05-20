import { env } from "app/config/env";

import { Collection } from "../domain/Collection";
import { CollectionRepository } from "../domain/CollectionRepository";

export class ServiceCollectionRepository implements CollectionRepository {
  async getAll(): Promise<Collection[]> {
    try {
      const request = await fetch(`${env.SHOPIFY_HOSTNAME}/admin/api/2023-10/smart_collections.json`, {
        headers: new Headers({
          'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
        })
      })
      const { smart_collections } = await request.json()
      const transformedCollections = smart_collections.map((collection: any) => {
        return {
          id: collection.id,
          title: collection.title,
          handle: collection.handle
        }
      })
      return transformedCollections
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}