import { ProductsByCollectionIdGetter } from "app/modules/product/application/get-by-collection-id/ProductsByCollectionIdGetter";
import { ServiceProductRepository } from "app/modules/product/infrastructure/ServiceProductRepository";

export const UseGetProductsByCollectionId = async (id: number) => {
  const productRepository = new ServiceProductRepository();
  const productsGetter = new ProductsByCollectionIdGetter(productRepository);

  const products = await productsGetter.getByCollectionId(id);

  return { products }
}