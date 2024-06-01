import { AuthRepository } from "../../domain/AuthRepository";
import { Credential } from "../../domain/Credential";

export class AccessTokenCreator {
  constructor(private readonly repository: AuthRepository) { }

  async login(credentials: Credential) {
    return this.repository.signIn(credentials);
  }
}