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
      "patrol-boat": new Ship("patrol-boat", 2),
    };
  }

  markBufferZone(name, rowStart, colStart, orientation) {
    const startRow = rowStart - 1 < 0 ? 0 : rowStart - 1;
    const endRow = Math.min(
      9,
      orientation === "horizontal"
        ? rowStart + 1
        : rowStart + this.ships[name].length
    );
    const startCol = colStart - 1 < 0 ? 0 : colStart - 1;
    const endCol = Math.min(
      9,
      orientation === "vertical"
        ? colStart + 1
        : colStart + this.ships[name].length
    );

    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCol; j <= endCol; j++) {
        if (this.board[i][j].value === "~") {
          this.board[i][j].value = "*";
        }
      }
    }
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
          console.log(this.board[rowStart][colStart].value);
          console.log(false);
          return false;
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
          return false;
        }
      }
      for (let i = 0; i < this.ships[name].length; i++) {
        this.ships[name].coords.add(`${rowStart + i},${colStart}`);
        this.board[rowStart + i][colStart].value = name[0];
      }
    }
    this.markBufferZone(name, rowStart, colStart, orientation);
    this.ships[name].placed = true;
    return true;
  }

  autoPlaceShips() {
    const ships = this.ships;

    const randomOrientation = () => {
      let orientation;
      const random = Math.floor(Math.random() * 2);
      if (random === 0) {
        orientation = "horizontal";
      } else {
        orientation = "vertical";
      }
      return orientation;
    };

    const randomNumber = () => {
      const coord = Math.floor(Math.random() * 10);
      return coord;
    };

    Object.keys(ships).forEach((key) => {
      let ship = ships[key];

      while (!ship.placed) {
        this.placeShip(
          ship.name,
          randomNumber(),
          randomNumber(),
          randomOrientation()
        );
      }
    });
    return "placed";
  }

  receiveAttack(x, y) {
    if (this.board[x][y].hit) {
      console.log(`row:${x}, col: ${y}`);
      console.log(this.board[x][y].hit);
      console.log(this.ships);
      console.log(this.board);
      return "Try again";
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

  checkForAvailableSquares() {
    const freeSpaces = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.board[i][j].hit === false) {
          freeSpaces.push([i, j]);
        }
      }
    }
    return freeSpaces;
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

  resetGame() {
    const ships = this.ships;
    this.board = [];
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i].push(Cell());
      }
    }
    Object.keys(ships).forEach((key) => {
      let ship = ships[key];
      ship.reset();
    });
  }

  shipsHits() {
    const ships = this.ships;
    let shipHitsArr = [];
    Object.keys(ships).forEach((key) => {
      let ship = ships[key];
      shipHitsArr.push([ship.name, ship.getHits(), ship.length]);
    });
    return shipHitsArr;
  }

  printBoard() {
    const boardWithCellValues = this.board.map((row) =>
      row.map((cell) => cell.hit)
    );
    console.log(boardWithCellValues);
  }
}
