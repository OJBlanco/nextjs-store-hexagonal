import { UserData } from "./UserData";

export interface UserRepository {
  save: (userData: UserData) => Promise<void>
}