import Image from "next/image";

import { Product } from "app/modules/product/domain/Product";

export const ProductItem = ({ id, title, image }: Product) => {
  return (
    <article key={id}>
      <p>{title}</p>
      <Image src={image} fill alt={title} loading="eager" />
    </article>
  )
}