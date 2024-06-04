import { CartItem } from "../domain/CartItem";
import { ShoppingCartRepository } from "../domain/ShoppingCartRepository";

export class StorageShoppingCartRepository implements ShoppingCartRepository {
  addToCart(cartItems: CartItem[]): void {
    localStorage.setItem('CART_ITEM', JSON.stringify(cartItems))
  }
}