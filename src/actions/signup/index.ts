"use server"

import { redirect } from "next/navigation";

import { AccessTokenCreator } from "app/modules/signin/application/login/AccessTokenCreator";
import { GraphqlSignInRepository } from "app/modules/signin/infrastructure/GraphqlSignInRepository";
import { UserCreator } from "app/modules/signup/application/create/UserCreator";
import { Signup } from "app/modules/signup/domain/Signup";
import { GraphqlUserRepository } from "app/modules/signup/infrastructure/GraphqlUserRepository";
import { Credential } from "app/modules/signin/domain/Credential";

export const handleCreateUser = async (formData: Signup) => {
  const userRepository = new GraphqlUserRepository();
  const userCreator = new UserCreator(userRepository);

  const signinRepository = new GraphqlSignInRepository();
  const accessTokenCreator = new AccessTokenCreator(signinRepository);

  const request = await userCreator.create(formData);

  const { customer } = request?.customerCreate;

  if (customer?.firstName) {
    await accessTokenCreator.login({ email: formData.email, password: formData.password });
    redirect('/store')
  }
}

export const handleLogin = async (credential: Credential) => {
  const signinRepository = new GraphqlSignInRepository();
  const accessTokenCreator = new AccessTokenCreator(signinRepository);

  const request = await accessTokenCreator.login(credential);

  if (request?.customerAccessTokenCreate?.customerAccessToken?.accessToken) {
    redirect('/store')
  }
}