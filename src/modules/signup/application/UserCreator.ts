import { Signup } from "../domain/Signup";
import { UserData } from "../domain/UserData";
import { UserRepository } from "../domain/UserRepository";

export class UserCreator {
  constructor(private readonly repository: UserRepository) { }

  async create (userData: Signup): Promise<void> {
    const user = UserData.create(userData);

    await this.repository.save(user)
  }
}