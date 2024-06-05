import { GraphQLClientBuilder } from "app/modules/shared/infrastructure/GraphQLClientBuilder";
import { OrderRepository } from "../domain/OrderRepository";
import { Edge, OrderQueryResponse } from "../domain/OrderResponse";
import { getOrdersQuery } from "app/graphql/cart/queries/getOrders";

export class GraphqlOrderRepository extends GraphQLClientBuilder implements OrderRepository {
  async get(accessToken: string) {
    try {
      const graphqlClient = GraphqlOrderRepository.getInstance().getClient();

      const variables = {
        customerAccessToken: accessToken
      }

      const { customer } = await graphqlClient.request<OrderQueryResponse>(getOrdersQuery, variables);

      const orders = customer?.orders?.edges.map((edge: Edge) => edge.node);
      
      return {
        totalOrders: customer?.orders?.totalCount,
        orders
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}