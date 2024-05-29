import { StringLengthValidators } from "app/modules/shared/domain/StringLengthValidators";

export class Name extends StringLengthValidators {
	constructor(readonly value: string) {
		super()
		Name.maxLength = 25
		if (!Name.isValid(value)) {
			throw new Error(Name.invalidMessage(value));
		}
	}

	public static isValid(value: string): boolean {
		this.isTooShort = value.length < this.minLength
		this.isTooLong = value.length > this.maxLength
		return !this.isTooShort && !this.isTooLong;
	}

	public static invalidMessage(value: string): string {
		if (this.isTooShort) {
			return `The name ${value} is too short. ${this.minLength} chars is the min allowed`;
		}

		return `The name is too long. ${this.maxLength} chars is the max allowed`;
	}
}