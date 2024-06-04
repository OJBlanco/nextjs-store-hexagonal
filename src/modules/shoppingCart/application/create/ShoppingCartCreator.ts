import { CartItem } from "../../domain/CartItem";
import { ShoppingCartRepository } from "../../domain/ShoppingCartRepository";

export class ShoppingCartCreator {
  constructor (private readonly repository: ShoppingCartRepository) { }

  async create (accessToken: string, cartItems: CartItem[]) {
    const request = await this.repository.create(accessToken, cartItems);
    return request;
  }
}