export class Email {
  private static readonly regexExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  constructor(readonly value: string) {
    if (!Email.isValid(value)) {
			throw new Error(Email.invalidMessage(value));
		}
  }

  public static isValid(value: string): boolean {
    return this.regexExp.test(value);
  }

  public static invalidMessage(value: string): string {
    return `${value} is not valid Email`
  }
}