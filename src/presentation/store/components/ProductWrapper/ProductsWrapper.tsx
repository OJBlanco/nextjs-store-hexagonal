import { Product } from "app/modules/product/domain/Product";

import { ProductCard } from "../ProductCard";
import styles from "./ProductsWrapper.module.css";

interface ProductsWrapperProps {
  products: Product[]
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <div className={styles.ProductsWrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}