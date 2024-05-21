"use client"

import { FormEvent, MouseEvent, useState } from "react";
import styles from "./ProductViewItemsOrder.module.css";


interface ProductViewItemsOrderProps {
  maxQuantity: number,
}

export const ProductViewItemsOrder = ({ maxQuantity }: ProductViewItemsOrderProps) => {
  const [counter, setCounter] = useState(1);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleSubtract = (event: MouseEvent) => {
    event.preventDefault();
    if (counter === 1) return;
    setCounter(counter - 1);
  }

  const handleAdd = (event: MouseEvent) => {
    event.preventDefault();
    if (counter === maxQuantity) return;
    setCounter(counter + 1);
  }

  return (
    <div className={styles.ProductViewItemsOrder}>
      <div className={styles.ProductViewItemsOrder__itemsCount}>
        <button onClick={handleSubtract}>-</button>
        <p>{counter}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <form
        onSubmit={handleSubmit}
        className={styles.ProductViewItemsOrder__form}
      >
        <button
          className={styles.ProductViewItemsOrder__submit}
          type="submit"
        >
          <span>Add to cart</span>
        </button>
      </form>
    </div>
  )
};