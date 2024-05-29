"use server"

import { UserCreator } from "app/modules/signup/application/UserCreator";
import { Signup } from "app/modules/signup/domain/Signup";
import { GraphqlUserRepository } from "app/modules/signup/infrastructure/GraphqlUserRepository";

export const handleCreateUser = async (formData: Signup) => {
  try {
    const userRepository = new GraphqlUserRepository();
    const userCreator = new UserCreator(userRepository);

    console.log('>>> formData', formData)

    await userCreator.create(formData)
  } catch (error){
    console.log(error)
  }   
}