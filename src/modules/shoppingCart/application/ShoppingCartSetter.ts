import { CartItem } from "../domain/CartItem";
import { ShoppingCartRepository } from "../domain/ShoppingCartRepository";

export class ShoppingCartSetter {
  constructor(private readonly repository: ShoppingCartRepository) { }

  addToCart(cartItem: CartItem) {
    this.repository.addToCart(cartItem);
  }
}