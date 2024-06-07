import { AuthRepository } from "../../domain/AuthRepository";

export class AccessTokenValidator {
  constructor(private readonly repository: AuthRepository) { }

  async validate() {
    return this.repository.validate();
  }
}