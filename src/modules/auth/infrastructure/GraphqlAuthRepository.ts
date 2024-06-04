import { cookies } from "next/headers";

import { GraphQLClientBuilder } from "app/modules/shared/infrastructure/GraphQLClientBuilder";
import { customerAccessTokenCreateMutation } from "app/graphql/auth/mutations/customerAccessTokenCreate";
import { getCustomerQuery } from "app/graphql/auth/queries/getCustomerQuery";
import { createUserMutation } from "app/graphql/auth/mutations/createUserMutation";
import { Credential } from "../domain/Credential";
import { AccessTokenResponse } from "../domain/AccessTokenResponse";
import { AuthRepository } from "../domain/AuthRepository";
import { UserData } from "../domain/UserData";
import { CreateUserResponse } from "../domain/CreateUserResponse";
import { CustomerAccessTokenResponse } from "../domain/CustomerAccessTokenResponse";

export class GraphqlAuthRepository extends GraphQLClientBuilder implements AuthRepository {
  async signIn(credentials: Credential): Promise<AccessTokenResponse> {
    try {
      const cookiesStore = cookies()
      const graphqlClient = GraphqlAuthRepository.getInstance().getClient();

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

      return request
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async signUp(user: UserData): Promise<CreateUserResponse> {
    try {
      const userData = user.dataObject;

      const graphqlClient = GraphqlAuthRepository.getInstance().getClient();

      const variables = {
        input: {
          ...userData,
          phone: '+58' + userData.phone,
          password: user.password.value,
        }
      }

      const request = await graphqlClient.request<CreateUserResponse>(createUserMutation, variables)
      return request
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  async validate(): Promise<CustomerAccessTokenResponse> {
    try {
      const cookieStore = cookies();
      const accessToken = cookieStore.get('accessToken')?.value;

      const graphqlClient = GraphqlAuthRepository.getInstance().getClient();

      const request = await graphqlClient.request<CustomerAccessTokenResponse>(getCustomerQuery, {
        customerAccessToken: accessToken
      });

      return request;

    } catch (error) {
      return error as CustomerAccessTokenResponse
    }
  }
}