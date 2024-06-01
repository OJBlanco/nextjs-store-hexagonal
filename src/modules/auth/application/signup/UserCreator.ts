
import { AuthRepository } from "../../domain/AuthRepository";
import { CreateUserResponse } from "../../domain/CreateUserResponse";
import { Signup } from "../../domain/Signup";
import { UserData } from "../../domain/UserData";


export class UserCreator {
  constructor(private readonly repository: AuthRepository) { }

  async create (userData: Signup): Promise<CreateUserResponse> {
    const user = UserData.create(userData);

    return this.repository.signUp(user)
  }
}