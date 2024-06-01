"use server"

import { redirect } from "next/navigation";

import { AccessTokenCreator } from "app/modules/auth/application/signin/AccessTokenCreator";
import { GraphqlAuthRepository } from "app/modules/auth/infrastructure/GraphqlAuthRepository";
import { Credential } from "app/modules/auth/domain/Credential";
import { UserCreator } from "app/modules/auth/application/signup/UserCreator";
import { Signup } from "app/modules/auth/domain/Signup";

export const handleCreateUser = async (formData: Signup) => {
  const authRepository = new GraphqlAuthRepository();
  const userCreator = new UserCreator(authRepository);
    const accessTokenCreator = new AccessTokenCreator(authRepository);

  const request = await userCreator.create(formData);

  const { customer } = request?.customerCreate;

  if (customer?.firstName) {
    await accessTokenCreator.login({ email: formData.email, password: formData.password });
    redirect('/store')
  }
}

export const handleLogin = async (credential: Credential) => {
  const authRepository = new GraphqlAuthRepository();
  const accessTokenCreator = new AccessTokenCreator(authRepository);

  const request = await accessTokenCreator.login(credential);

  if (request?.customerAccessTokenCreate?.customerAccessToken?.accessToken) {
    redirect('/store')
  }
}