import Image from "next/image";
import Link from "next/link";

import { Product } from "app/modules/product/domain/Product";

import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.handle}?id=${product.id}`} className={styles.ProductCard__link}>
      <article className={styles.ProductCard}>
        <Image
          src={product.image}
          alt={product.title}
          quality={80}
          height={320}
          width={320}
          loading="eager"
        />
        <div className={styles.ProductCard__info}>
          <h3>{product.title}</h3>
        </div>
        <span className={styles.ProductCard__priceTag}>${product.price} USD</span>
      </article>
    </Link>
  );
};