import { AccessTokenValidator } from "app/modules/auth/application/validate/AccessTokenValidator";
import { GraphqlAuthRepository } from "app/modules/auth/infrastructure/GraphqlAuthRepository";

export const UseValidateAccessToken = async () => {
  const authRepository = new GraphqlAuthRepository();

  const validator = new AccessTokenValidator(authRepository);

  const customer = await validator.validate();

  return customer
}