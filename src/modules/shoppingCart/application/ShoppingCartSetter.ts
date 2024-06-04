import { CartItem } from "../domain/CartItem";
import { ShoppingCartRepository } from "../domain/ShoppingCartRepository";

export class ShoppingCartSetter {
  constructor(private readonly repository: ShoppingCartRepository) { }

  addToCart(cartItems: CartItem[]) {
    this.repository.addToCart(cartItems);
  }
}