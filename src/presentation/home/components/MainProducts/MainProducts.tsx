import { UseGetAllProducts } from "app/presentation/shared/hooks/UseGetAllProducts";
import { ProductItem } from "./components/ProductItem/ProductItem";

import styles from './MainProducts.module.css'

export const MainProducts = async () => { 
  const { products } = await UseGetAllProducts();

  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {
          products?.map(product => (
            <ProductItem key={product.id} {...product} />
          ))
        }
      </div>
    </section>
  )
}