import { Product } from "app/modules/product/domain/Product";
import { UseGetAllCollections } from "app/presentation/shared/hooks/UseGetAllCollections";
import { UseGetAllProducts } from "app/presentation/shared/hooks/UseGetAllProducts";
import { ProductsWrapper } from "app/presentation/store/components/ProductWrapper/ProductsWrapper"
import { UseGetProductsByCollectionId } from "app/presentation/store/hooks/UseGetProductsByCollectionId";

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  let products: Product[] = []

  const { categories } = props.params;

  if (!categories?.length) {
    products = (await UseGetAllProducts())?.products;
  } else {
    const { collections } = await UseGetAllCollections();
    const collectionId = categories[0];
    const selectedCollectionId = collections.find((collection) => collection.handle === collectionId)?.id || 0;

    products = (await UseGetProductsByCollectionId(selectedCollectionId))?.products;
  }

  return (
    <ProductsWrapper products={products} />
  )
}