import { create } from "zustand";

import { CartItem } from "app/modules/shoppingCart/domain/CartItem";
import { StorageShoppingCartRepository } from "app/modules/shoppingCart/infrastructure/StorageShoppingCartRepository";
import { ShoppingCartSetter } from "app/modules/shoppingCart/application/ShoppingCartSetter";

type Store = {
  cart: CartItem[]
  addToCart: (cartItem: CartItem) => void
}

export const useShoppingCart = create<Store>()((set) => ({
  cart: [],
  addToCart: (cartItem: CartItem) => set((state) => {
    const cartRepository = new StorageShoppingCartRepository();
    const cartSetter = new ShoppingCartSetter(cartRepository);

    const newCart = [...state.cart, cartItem];
    cartSetter.addToCart(newCart);
    return { cart: newCart };
  }
  ),
}));