import { AllProductsGetter } from "app/modules/product/application/get-all/AllProductsGetter";
import { ServiceProductRepository } from "app/modules/product/infrastructure/ServiceProductRepository"

export const UseGetAllProducts = async () => {
  const productRepository = new ServiceProductRepository();
  const productsGetter = new AllProductsGetter(productRepository);

  const products = await productsGetter.get();

  return { products }
}