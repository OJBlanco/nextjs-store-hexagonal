import { ProductView } from "app/presentation/product/components/ProductView/ProductView"
import { UseGetProductById } from "app/presentation/product/hooks/UseGetProductById"
import { redirect } from "next/navigation"


interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const { id } = searchParams

  if (!id) {
    redirect('/store')
  }

  const { product } = await UseGetProductById(Number(id))

  return <ProductView product={product} />
}