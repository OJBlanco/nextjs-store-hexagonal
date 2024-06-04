import { CartItem } from "../../domain/CartItem";
import { ShoppingCartRepository } from "../../domain/ShoppingCartRepository";

export class ShoppingCartSetter {
  constructor(private readonly repository: ShoppingCartRepository) { }

  setToCart(cartItems: CartItem[]) {
    this.repository.setToCart(cartItems);
  }
}