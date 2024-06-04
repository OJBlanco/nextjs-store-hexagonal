export interface CreateShoppingCartResponse {
  cartCreate: CartCreate;
}

interface CartCreate {
  cart: Cart;
}

interface Cart {
  checkoutUrl: string;
}
