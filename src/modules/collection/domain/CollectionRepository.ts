import { Collection } from "./Collection";

export interface CollectionRepository {
  getAll: () => Promise<Collection[]>
}