import { create } from "zustand";

import { CartItem } from "app/modules/shoppingCart/domain/CartItem";
import { StorageShoppingCartRepository } from "app/modules/shoppingCart/infrastructure/StorageShoppingCartRepository";
import { ShoppingCartSetter } from "app/modules/shoppingCart/application/set/ShoppingCartSetter";

type Store = {
  cart: CartItem[]
  addToCart: (cartItem: CartItem) => void
  removeCartItem: (cartItem: CartItem) => void
}

const cartRepository = new StorageShoppingCartRepository();
const cartSetter = new ShoppingCartSetter(cartRepository);

export const useShoppingCart = create<Store>()((set) => ({
  cart: (() => {

    if (typeof window === 'undefined') {
      return []
    }

    const cart = localStorage.getItem('CART_ITEM')
    if (cart) {
      return JSON.parse(cart)
    }

    return []
  })(),
  addToCart: (cartItem: CartItem) => set((state) => {
    const newCart = [...state.cart, cartItem];
    cartSetter.setToCart(newCart);
    return ({ cart: newCart });
  }
  ),
  removeCartItem: (cartItem: CartItem) => set((state) => {
    const currentCart = state.cart
    const newCart = currentCart.filter((item) => item.id !== cartItem.id)
    cartSetter.setToCart(newCart);
    return ({ cart: newCart })
  })
}));