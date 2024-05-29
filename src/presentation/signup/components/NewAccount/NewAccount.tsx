"use client";

import { FormEvent, useCallback, useState } from "react";

import { useFormData } from "app/presentation/shared/hooks/UseFormData";

import { Signup } from "app/modules/signup/domain/Signup";
import { handleCreateUser } from "app/actions/signup";

import { UseValidateForm } from "../../hooks/UseValidateForm";
import styles from "./NewAccount.module.css";

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
}

export const NewAccount = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const { formData, updateForm, resetForm } = useFormData<Signup>(initialState);
  const { errors, validator } = UseValidateForm(formData);

  const handleChange = useCallback((key: keyof Signup, value: string) => {
    updateForm({ [key]: value })
    validator();
  }, [updateForm, validator]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      console.log(errors, Object.values(errors || {}).some(k => k?.length > 0))

      if (Object.values(errors || {}).some(k => k?.length > 0)) {
        return
      }

      handleCreateUser(formData)
    } catch { }
  }

  return (
    <div className={styles.NewAccountForm}  >
      <h1 className={styles.NewAccountForm__title}>New Account</h1>
      <form className={styles.NewAccountForm__form} onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="Name"
            disabled={loading}
            onChange={(ev) => handleChange('firstName', ev.target.value)}
          />
          {
            formData.firstName && errors?.firstName && (
              <p className={styles.NewAccountForm__error}>{errors?.firstName}</p>
            )
          }
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Lastname"
            disabled={loading}
            onChange={(ev) => handleChange('lastName', ev.target.value)}
          />
          {
            formData.lastName && errors?.lastName && (
              <p className={styles.NewAccountForm__error}>{errors?.lastName}</p>
            )
          }
        </div>
        <div>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="email"
            disabled={loading}
            autoComplete="false"
            onChange={(ev) => handleChange('email', ev.target.value)}
          />
          {
            formData.email && errors?.email && (
              <p className={styles.NewAccountForm__error}>{errors?.email}</p>
            )
          }
        </div>
        <div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="phone number"
            pattern="^[0-9]*$"
            disabled={loading}
            onChange={(ev) => handleChange('phone', ev.target.value)}
          />
          {
            formData.phone && errors?.phone && (
              <p className={styles.NewAccountForm__error}>{errors?.phone}</p>
            )
          }
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="password"
            disabled={loading}
            onChange={(ev) => handleChange('password', ev.target.value)}
            autoComplete="off"
          />
          {
            formData.password && errors?.password && (
              <p className={styles.NewAccountForm__error}>{errors?.password}</p>
            )
          }
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="re-type password"
            disabled={loading}
            onChange={(ev) => handleChange('confirmPassword', ev.target.value)}
            autoComplete="off"
          />
          {
            formData.confirmPassword && errors?.confirmPassword && (
              <p className={styles.NewAccountForm__error}>{errors?.confirmPassword}</p>
            )
          }
        </div>
        <button type="submit" disabled={loading}>Create account</button>
        <button type="button" disabled={loading} onClick={resetForm}>Cancel</button>
      </form>
    </div>
  );
}