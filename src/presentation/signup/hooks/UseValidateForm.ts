import { useState } from "react";

import { Email } from "app/modules/shared/domain/Email";
import { Password } from "app/modules/shared/domain/Password";
import { Phone } from "app/modules/shared/domain/Phone";
import { Name } from "app/modules/auth/domain/Name";
import { LastName } from "app/modules/auth/domain/LastName";
import { Signup } from "app/modules/auth/domain/Signup";

interface ErrorsSignupForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export const UseValidateForm = (formData: Signup) => {
  const [errors, setErrors] = useState<ErrorsSignupForm>();

  const validator = () => {
    const isFirstNameValid = Name.isValid(formData.firstName);
		const isLastNameValid = LastName.isValid(formData.lastName);
    const isEmailValid = Email.isValid(formData.email);
		const isPhoneValid = Phone.isValid(formData.phone);
    const isPasswordValid = Password.isValid(formData.password);
		const isConfirmPasswordValid = Password.isValid(formData.confirmPassword);

    setErrors({
			firstName: isFirstNameValid ? "" : Name.invalidMessage(formData.firstName),
			lastName: isLastNameValid ? "" : LastName.invalidMessage(formData.lastName),
      email: isEmailValid ? "" : Email.invalidMessage(formData.email),
			phone: isPhoneValid ? "" : Phone.invalidMessage(formData.phone),
      password: isPasswordValid ? "" : Password.invalidMessage(formData.password),
			confirmPassword: isConfirmPasswordValid ? "" : Password.invalidMessage(formData.confirmPassword),
		});
  }

  return { errors, validator }
}