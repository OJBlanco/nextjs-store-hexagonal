import { CartItem } from "./CartItem";
import { CreateShoppingCartResponse } from "./CreateShoppingCartResponse";

export interface ShoppingCartRepository {
  setToCart: (cartItems: CartItem[]) => void;
  create: (accessToken: string, cartItems: CartItem[]) => Promise<CreateShoppingCartResponse>;
}