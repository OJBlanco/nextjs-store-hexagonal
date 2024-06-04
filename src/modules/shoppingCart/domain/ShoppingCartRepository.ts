import { CartItem } from "./CartItem";

export interface ShoppingCartRepository {
  addToCart: (cartItems: CartItem[]) => void;
}