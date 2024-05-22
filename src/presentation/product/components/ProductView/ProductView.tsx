import Image from "next/image";

import styles from './ProductView.module.css'
import { Product } from "app/modules/product/domain/Product";
import { ProductViewItemsOrder } from "./components";
import { SanitizeHTML } from "app/presentation/shared/components/SanitizeHTML";

interface ProductViewProps {
  product: Product
}

export const ProductView = ({ product }: ProductViewProps) => {

  return (
    <main className={styles.ProductView}>
      <section className={styles.ProductView__images}>
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className={styles.ProductView__info}>
        <h1 className={styles.ProductView__info__title}>{product.title}</h1>
        <p className={styles.ProductView__info__category}>{product.tags}</p>
        <SanitizeHTML tag="p" className={styles.ProductView__info__description}>
          {product.body_html}
        </SanitizeHTML>
        <span className={styles.ProductView__info__price}>
          $ {product.variants[0].price}
        </span>
        <ProductViewItemsOrder maxQuantity={product.variants[0].inventory_quantity} />
      </section>
    </main>
  )
};