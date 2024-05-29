import { GraphQLClient } from 'graphql-request';

import { env } from 'app/config/env';

export class GraphQLClientBuilder {
  private readonly endpoint: string = env.SHOPIFY_GRAPHQL_ENDPOINT;

  private static instance: GraphQLClientBuilder;

  static getInstance(): GraphQLClientBuilder {
    if (!this.instance) {
      this.instance = new GraphQLClientBuilder();
    }
    return this.instance;
  }

  getClient(): GraphQLClient {
    return new GraphQLClient(this.endpoint, {
      headers: {
        'Shopify-Storefront-Private-Token': env.SHOPIFY_STOREFRONT_TOKEN,
      },
    });
  }
}