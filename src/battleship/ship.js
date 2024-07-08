export class Ships {
  constructor(length) {
    this.length = length;
    this.hits = length - length;
    this.sunk = false;
  }
}
