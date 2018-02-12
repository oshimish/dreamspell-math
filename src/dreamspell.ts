import './enums';

export class DreamSpellDate {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  public greet(): string {
    return `Bonjour, ${this.greeting}!`;
  }
}
