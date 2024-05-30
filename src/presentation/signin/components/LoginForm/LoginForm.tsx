"use client"

import { FormEvent } from "react";
import { UseLogin } from "../../hooks/UseLogin";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  const { login } = UseLogin();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const formDataObject = Object.fromEntries(formData);
    await login(formDataObject.email as string, formDataObject.password as string);
  }

  return (
    <div className={styles.NewAccountForm}  >
      <h1 className={styles.NewAccountForm__title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.NewAccountForm__form}>
        <input type="text" name="email" placeholder="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
  );
}