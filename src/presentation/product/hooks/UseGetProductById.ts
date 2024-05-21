import { ProductGetter } from "app/modules/product/application/get/ProductGetter";
import { ServiceProductRepository } from "app/modules/product/infrastructure/ServiceProductRepository";

export const UseGetProductById = async (id: number) => {
  const productRepository = new ServiceProductRepository();
  const productGetter = new ProductGetter(productRepository);

  const product = await productGetter.get(id);

  return { product }
}