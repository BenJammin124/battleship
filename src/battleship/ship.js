export class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.coords = new Set();
    this.placed = false;
  }

  hit() {
    this.hits += 1;
    if (this.isSunk()) {
      return this.name;
    }
  }

  isSunk() {
    if (this.hits >= this.length) {
      this.sunk = true;
      return true;
    }
  }
}
