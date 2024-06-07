import { AllCollectionGetter } from "app/modules/collection/application/get-all/AllCollectionGetter";
import { ServiceCollectionRepository } from "app/modules/collection/infrastructure/ServiceCollectionRepository";


export const UseGetAllCollections = async () => {
  const collectionRepository = new ServiceCollectionRepository();
  const collectionsGetter = new AllCollectionGetter(collectionRepository);

  const collections = await collectionsGetter.get();

  return { collections }
}