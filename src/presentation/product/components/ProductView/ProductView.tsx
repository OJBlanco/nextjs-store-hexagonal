"use client";

import { MouseEvent } from "react";

import Image from "next/image";

import { Product } from "app/modules/product/domain/Product";
import { SanitizeHTML } from "app/presentation/shared/components/SanitizeHTML";
import { useShoppingCart } from "app/presentation/shared/hooks/UseShoppingCart";
import { ProductViewItemsOrder } from "./components";
import styles from './ProductView.module.css'

interface ProductViewProps {
  product: Product
}

export const ProductView = ({ product }: ProductViewProps) => {
  const { addToCart } = useShoppingCart();

  const handleAddToCart = (event: MouseEvent, counter: number) => {
    event.preventDefault();
    addToCart({
      title: product.title,
      price: product.price,
      quantity: counter,
      id: product.id,
    });
  }

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
        <ProductViewItemsOrder maxQuantity={product.variants[0].inventory_quantity} onAdd={handleAddToCart} />
      </section>
    </main>
  )
};