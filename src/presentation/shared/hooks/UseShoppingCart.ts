import { create } from "zustand";

import { CartItem } from "app/modules/shoppingCart/domain/CartItem";

type Store = {
  cart: CartItem[]
  addToCart: (cartItem: CartItem) => void
}

export const useShoppingCart = create<Store>()((set) => ({
  cart: [],
  addToCart: (cartItem: CartItem) => set((state) => ({ cart: [...state.cart, cartItem]})),
}));