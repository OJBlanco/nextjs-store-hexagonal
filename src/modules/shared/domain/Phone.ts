export class Phone {
  private static readonly regexExp = /^[0-9]*$/

  constructor(readonly value: string) {
    if (!Phone.isValid(value)) {
			throw new Error(Phone.invalidMessage(value));
		}
  }

  public static isValid(value: string): boolean {
    return this.regexExp.test(value);
  }

  public static invalidMessage(value: string): string {
    return `${value} is not valid phone number`
  }
}