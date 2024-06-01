import { StringLengthValidators } from "app/modules/shared/domain/StringLengthValidators";

export class LastName extends StringLengthValidators {
	constructor(readonly value: string) {
		super()
		LastName.maxLength = 40
		if (!LastName.isValid(value)) {
			throw new Error(LastName.invalidMessage(value));
		}
	}

	public static isValid(value: string): boolean {
		this.isTooShort = value.length < this.minLength
		this.isTooLong = value.length > this.maxLength
		return !this.isTooShort && !this.isTooLong;
	}

	public static invalidMessage(value: string): string {
		if (this.isTooShort) {
			return `The last name ${value} is too short. ${this.minLength} chars is the min allowed`;
		}

		return `The last name is too long. ${this.maxLength} chars is the max allowed`;

	}
}