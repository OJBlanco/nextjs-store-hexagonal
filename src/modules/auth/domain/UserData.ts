import { Email } from "app/modules/shared/domain/Email";
import { Phone } from "app/modules/shared/domain/Phone";
import { Password } from "app/modules/shared/domain/Password";
import { LastName } from "./LastName";
import { Name } from "./Name";
import { Signup } from "./Signup";

export class UserData {
  private constructor(
    readonly firstName: Name,
    readonly lastName: LastName,
    readonly email: Email,
    readonly phone: Phone,
    readonly password: Password,
    readonly confirmPassword: Password,
  ) { }

  public static create({ firstName, lastName, email, phone, password, confirmPassword }: Signup): UserData {
    if (password !== confirmPassword) {
      throw new Error(`Passwords do not match`)
    }

    return new UserData(
      new Name(firstName),
      new LastName(lastName),
      new Email(email),
      new Phone(phone),
      new Password(password),
      new Password(confirmPassword)
    );
  }

  get firstNameValue() {
    return this.firstName.value
  }

  get lastNameValue() {
    return this.lastName.value
  }

  get emailValue() {
    return this.email.value
  }

  get phoneValue() {
    return this.phone.value
  }

  get dataObject() {
    return {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      phone: this.phone.value
    }
  }
}