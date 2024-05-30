import { Credential } from "./Credential";

export interface SignInRepository {
  login: (credentials: Credential) => Promise<void>
}