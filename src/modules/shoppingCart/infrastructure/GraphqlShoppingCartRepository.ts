import { getCustomerQuery } from "app/graphql/auth/queries/getCustomerQuery";
import { createCartMutation } from "app/graphql/cart/mutations/createCartMutation";
import { CustomerAccessTokenResponse } from "app/modules/auth/domain/CustomerAccessTokenResponse";
import { GraphQLClientBuilder } from "app/modules/shared/infrastructure/GraphQLClientBuilder";
import { CartItem } from "../domain/CartItem";
import { CreateShoppingCartResponse } from "../domain/CreateShoppingCartResponse";
import { ShoppingCartRepository } from "../domain/ShoppingCartRepository";

export class GraphqlShoppingCartRepository implements ShoppingCartRepository {
  setToCart(cartItems: CartItem[]): void {
    return undefined
  }

  async create(accessToken: string, cartItems: CartItem[]): Promise<CreateShoppingCartResponse> {
    try {
      const graphqlClient = GraphQLClientBuilder.getInstance().getClient();

      const { customer } = await graphqlClient.request<CustomerAccessTokenResponse>(getCustomerQuery, {
        customerAccessToken: accessToken
      })

      const variables = {
        input: {
          buyerIdentity: {
            customerAccessToken: accessToken,
            email: customer?.email
          },
          lines: cartItems.map(item => ({
            merchandiseId: item.merchandiseId,
            quantity: item.quantity
          }))
        }
      }

      const request = await graphqlClient.request<CreateShoppingCartResponse>(createCartMutation, variables)

      return request

    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}