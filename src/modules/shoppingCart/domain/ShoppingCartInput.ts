export interface ShoppingCartInput {
  buyerIdentity: BuyerIdentity;
  lines: Line[];
}

interface Line {
  merchandiseId: string;
  quantity: number;
}

interface BuyerIdentity {
  customerAccessToken: string;
  email: string;
}
