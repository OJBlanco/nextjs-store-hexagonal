import { GraphQLClientBuilder } from "app/modules/shared/infrastructure/GraphQLClientBuilder";
import { UserData } from "../domain/UserData";
import { UserRepository } from "../domain/UserRepository";
import { createUserMutation } from "app/graphql/signup/mutations/createUserMutation";
import { CreateUserResponse } from "../domain/CreateUserResponse";

export class GraphqlUserRepository extends GraphQLClientBuilder implements UserRepository {
  async save(user: UserData): Promise<CreateUserResponse> {
    try {
      const userData = user.dataObject;

      const graphqlClient = this.getClient();

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
}