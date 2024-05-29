"use server"

import { Signup } from "app/modules/signup/domain/Signup";
import { UserData } from "app/modules/signup/domain/UserData";

export const handleCreateUser = (formData: Signup) => {
  const userData = UserData.create(formData)
  console.log("handleCreateUser", userData)    
}