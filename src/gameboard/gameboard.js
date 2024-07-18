import { Ship } from "../battleship/ship";

function Cell() {
  let value = "~";
  let hit = false;
  return {
    value,
    hit,
  };
}

export class GameBoard {
  constructor() {
    this.board = [];

    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i].push(Cell());
      }
    }

    this.ships = {
      carrier: new Ship("carrier", 5),
      battleship: new Ship("battleship", 4),
      destroyer: new Ship("destroyer", 3),
      submarine: new Ship("submarine", 3),
      "patrol boat": new Ship("patrol boat", 2),
    };
  }

  placeShip(name, rowStart, colStart, orientation) {
    if (rowStart <= -1 || colStart <= -1 || rowStart >= 10 || colStart >= 10) {
      return "Out of bounds";
    }

    if (orientation === "horizontal") {
      for (let i = 0; i < this.ships[name].length; i++) {
        if (
          colStart + i >= 10 ||
          this.board[rowStart][colStart + i].value !== "~"
        ) {
          // console.log("Invalid placement");
          return;
        }
      }
      for (let i = 0; i < this.ships[name].length; i++) {
        this.ships[name].coords.add(`${rowStart},${colStart + i}`);
        this.board[rowStart][colStart + i].value = name[0];
      }
    } else if (orientation === "vertical") {
      for (let i = 0; i < this.ships[name].length; i++) {
        if (
          rowStart + i >= 10 ||
          this.board[rowStart + i][colStart].value !== "~"
        ) {
          // console.log("Invalid Placement");
          return;
        }
      }
      for (let i = 0; i < this.ships[name].length; i++) {
        this.ships[name].coords.add(`${rowStart + i},${colStart}`);
        this.board[rowStart + i][colStart].value = name[0];
      }
    }
  }

  receiveAttack(x, y) {
    if (this.board[x][y].hit) {
      return "That position has already been attacked!";
    } else {
      this.board[x][y].hit = true;
      for (const shipName in this.ships) {
        const ship = this.ships[shipName];
        if (ship.coords.has(`${x},${y}`)) {
          ship.hit();
          return "Hit!";
        }
      }
      return "Miss!";
    }
  }

  checkIfAllShipsSunk() {
    const sunkShips = [];
    for (const shipName in this.ships) {
      const ship = this.ships[shipName];
      if (ship.sunk) {
        sunkShips.push(shipName);
      }
    }
    if (sunkShips.length >= 5) {
      return true;
    } else {
      return false;
    }
  }
}
