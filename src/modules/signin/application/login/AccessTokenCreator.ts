import { Credential } from "../../domain/Credential";
import { SignInRepository } from "../../domain/SignInRepository";

export class AccessTokenCreator {
  constructor(private readonly repository: SignInRepository) { }

  async login(credentials: Credential) {
    return this.repository.login(credentials);
  }
}