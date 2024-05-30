import { CreateUserResponse } from "../../domain/CreateUserResponse";
import { Signup } from "../../domain/Signup";
import { UserData } from "../../domain/UserData";
import { UserRepository } from "../../domain/UserRepository";


export class UserCreator {
  constructor(private readonly repository: UserRepository) { }

  async create (userData: Signup): Promise<CreateUserResponse> {
    const user = UserData.create(userData);

    return this.repository.save(user)
  }
}