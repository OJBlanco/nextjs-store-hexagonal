"use client";

import { useMemo, useState } from "react";

import { FaShoppingCart } from "react-icons/fa";

import { useShoppingCart } from "../../hooks/UseShoppingCart";
import styles from './ShoppingCart.module.css'
import { ShoppingCartItem } from "../ShoppingCartItem";
import { handleCreateCart } from "app/actions/signup";

export default function ShoppingCart() {
  const { cart } = useShoppingCart();

  const [isOpen, setIsOpen] = useState(false);
  const [isBuying, setIsBuying] = useState(false);

  const hasItems = useMemo(() => cart.length > 0, [cart]);

  const handleOpen = () => {
    if (hasItems) {
      setIsOpen(!isOpen)
    }
  };

  const handleBuy = async () => {
    try {
      setIsBuying(true);
      const checkoutUrl = await handleCreateCart(cart);
      if(!checkoutUrl) throw new Error('Error creating checkout');
      window.localStorage.removeItem('CART_ITEM');
      window.location.href = checkoutUrl;
    } catch (error) {
      console.log(error);
    } finally {
      setIsBuying(false);
    }
  };

  return (
    <button className={styles.ShoppingCart} onClick={handleOpen}>
      {
        hasItems && (
          <span className={styles.ShoppingCart__counter}>
            {cart.length}
          </span>
        )
      }
      <FaShoppingCart />
      {isOpen && (
        <div className={styles.ShoppingCart__items}>
          {
            cart.map(item => (
              <ShoppingCartItem key={item.id} item={item} />
            ))
          }
          <button onClick={handleBuy} className={styles.ShoppingCart__buyButton} disabled={isBuying}>
            Buy
          </button>
        </div>
      )}
    </button>
  )
}