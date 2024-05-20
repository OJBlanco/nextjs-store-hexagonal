import { Collection } from "../../domain/Collection";
import { CollectionRepository } from "../../domain/CollectionRepository";

export class AllCollectionGetter {
  constructor(private readonly repository: CollectionRepository) { }

  async get(): Promise<Collection[]> {
    return this.repository.getAll();
  }
}