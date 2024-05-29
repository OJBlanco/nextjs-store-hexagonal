import { StringLengthValidators } from "app/modules/shared/domain/StringLengthValidators";

export class Password extends StringLengthValidators {
	constructor(readonly value: string) {
		super()
		Password.minLength = 5
		Password.maxLength = 18
		if (!Password.isValid(value)) {
			throw new Error(Password.invalidMessage(value));
		}
	}

	public static isValid(value: string): boolean {
		this.isTooShort = value.length < this.minLength
		this.isTooLong = value.length > this.maxLength
		return !this.isTooShort && !this.isTooLong;
	}

	public static invalidMessage(value: string): string {
		if (this.isTooShort) {
			return `The password ${value} is too short. ${this.minLength} chars is the min allowed`;
		}

		return `The password is too long. ${this.maxLength} chars is the max allowed`;

	}
}