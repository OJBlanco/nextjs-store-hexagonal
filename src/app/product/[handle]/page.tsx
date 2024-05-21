import { ProductView } from "app/presentation/product/components/ProductView/ProductView"
import { UseGetProductById } from "app/presentation/product/hooks/UseGetProductById"


interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = Number(searchParams.id)
  const { product } = await UseGetProductById(id)

  return <ProductView product={product} />
}