import { UseGetAllProducts } from "app/presentation/shared/hooks/UseGetAllProducts";
import { ProductsWrapper } from "app/presentation/store/components/ProductWrapper/ProductsWrapper"

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  const { products } = await UseGetAllProducts();

  const { categories } = props.params

  return (
    <ProductsWrapper products={products} />
  )
}