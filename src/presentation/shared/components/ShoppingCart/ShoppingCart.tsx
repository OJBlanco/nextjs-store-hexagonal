"use client";

import { FaShoppingCart } from "react-icons/fa";

import { useShoppingCart } from "../../hooks/UseShoppingCart";
import styles from './ShoppingCart.module.css'

export const ShoppingCart = () => {
  const { cart } = useShoppingCart();
  return (
    <button className={styles.ShoppingCart}>
      <span className={styles.ShoppingCart__counter}>
        {cart.length}
      </span>
      <FaShoppingCart />
    </button>
  )
}