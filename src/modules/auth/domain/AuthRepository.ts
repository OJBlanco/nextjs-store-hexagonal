import { AccessTokenResponse } from "./AccessTokenResponse";
import { CreateUserResponse } from "./CreateUserResponse";
import { Credential } from "./Credential";
import { CustomerAccessTokenResponse } from "./CustomerAccessTokenResponse";
import { UserData } from "./UserData";

export interface AuthRepository {
  signIn: (credentials: Credential) => Promise<AccessTokenResponse>;
  signUp: (userData: UserData) => Promise<CreateUserResponse>;
  validate: () => Promise<CustomerAccessTokenResponse>;
}