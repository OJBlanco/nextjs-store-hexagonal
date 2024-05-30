import { cookies } from "next/headers";

import { GraphQLClientBuilder } from "app/modules/shared/infrastructure/GraphQLClientBuilder";
import { customerAccessTokenCreateMutation } from "app/graphql/signin/mutations/customerAccessTokenCreate";
import { SignInRepository } from "../domain/SignInRepository";
import { Credential } from "../domain/Credential";
import { AccessTokenResponse } from "../domain/AccessTokenResponse";

export class GraphqlSignInRepository extends GraphQLClientBuilder implements SignInRepository {
  async login(credentials: Credential): Promise<void> {
    try {
      const cookiesStore = cookies()
      const graphqlClient = this.getClient();

      const variables = {
        ...credentials,
      }

      const request = await graphqlClient.request<AccessTokenResponse>(customerAccessTokenCreateMutation, variables);

      const { accessToken, expiresAt } = request?.customerAccessTokenCreate?.customerAccessToken;

      if (accessToken) {
        cookiesStore.set("accessToken", accessToken, {
          path: "/",
          expires: new Date(expiresAt),
          httpOnly: true,
          sameSite: "strict"
        })
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}