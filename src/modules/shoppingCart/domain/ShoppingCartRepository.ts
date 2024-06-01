import { CartItem } from "./CartItem";

export interface ShoppingCartRepository {
  addToCart: (cartItem: CartItem) => void;
}