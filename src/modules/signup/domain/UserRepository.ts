import { CreateUserResponse } from "./CreateUserResponse";
import { UserData } from "./UserData";

export interface UserRepository {
  save: (userData: UserData) => Promise<CreateUserResponse>
}