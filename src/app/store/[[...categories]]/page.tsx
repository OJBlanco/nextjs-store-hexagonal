import { ServiceProductRepository } from "app/modules/product/infrastructure/ServiceProductRepository";
import { ProductsWrapper } from "app/presentation/store/components/ProductWrapper/ProductsWrapper"

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  const productRepository = new ServiceProductRepository();

  const products = await productRepository.getAll();

  const { categories } = props.params

  return (
    <ProductsWrapper products={products} />
  )
}