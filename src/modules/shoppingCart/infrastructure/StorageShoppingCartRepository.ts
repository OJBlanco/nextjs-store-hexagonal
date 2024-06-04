import { CartItem } from "../domain/CartItem";
import { CreateShoppingCartResponse } from "../domain/CreateShoppingCartResponse";
import { ShoppingCartRepository } from "../domain/ShoppingCartRepository";

export class StorageShoppingCartRepository implements ShoppingCartRepository {
  setToCart(cartItems: CartItem[]): void {
    localStorage.setItem('CART_ITEM', JSON.stringify(cartItems))
  }

  async create(accessToken: string, cartItems: CartItem[]): Promise<CreateShoppingCartResponse> {
    return new Promise(resolve => resolve({ cartCreate: { cart: { checkoutUrl: '' } } }))
  }
}