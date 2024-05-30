import { AccessTokenResponse } from "./AccessTokenResponse";
import { Credential } from "./Credential";

export interface SignInRepository {
  login: (credentials: Credential) => Promise<AccessTokenResponse>
}