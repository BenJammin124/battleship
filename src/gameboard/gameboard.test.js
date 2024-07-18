import { describe, expect, it, beforeEach, jest } from "@jest/globals";
// import { Ship } from "./ship";
import { GameBoard } from "./gameboard";

describe("Game board creation and functions", () => {
  let gameBoard;
  let battleships;
  beforeEach(() => {
    gameBoard = new GameBoard();
    battleships = gameBoard.ships;
  });

  it("is defined", () => {
    expect(gameBoard).toBeDefined();
  });

  it("creates ships", () => {
    expect(battleships["carrier"]).toEqual({
      name: "carrier",
      length: 5,
      hits: 0,
      sunk: false,
      coords: expect.any(Set),
    });
  });

  it("places ship horizontal", () => {
    gameBoard.placeShip("carrier", 0, 0, "horizontal");
    const expectedCoords = new Set(["0,0", "0,1", "0,2", "0,3", "0,4"]);
    expect(Array.from(battleships["carrier"].coords)).toEqual(
      Array.from(expectedCoords)
    );

    const myMock = jest.fn((x) => {
      for (let i = 0; i <= x; i++) {
        expect(gameBoard.board[0][i].value).toBe("c");
      }
    });
    myMock(4);
  });

  it("places ship vertical", () => {
    gameBoard.placeShip("destroyer", 0, 0, "vertical");
    const expectedCoords = new Set(["0,0", "1,0", "2,0"]);
    expect(Array.from(battleships["destroyer"].coords)).toEqual(
      Array.from(expectedCoords)
    );

    expect(gameBoard.board[0][0].value).toBe("d");
    expect(gameBoard.board[1][0].value).toBe("d");
    expect(gameBoard.board[2][0].value).toBe("d");
  });

  it("square receives attack and checks for boat", () => {
    gameBoard.placeShip("carrier", 0, 0, "horizontal");
    gameBoard.receiveAttack(0, 0);
    gameBoard.receiveAttack(0, 1);
    gameBoard.receiveAttack(0, 2);
    gameBoard.receiveAttack(0, 3);
    gameBoard.receiveAttack(0, 4);
    expect(gameBoard.board[0][0].hit).toBeTruthy();
    expect(battleships["carrier"].hits).toBe(5);
    expect(battleships["carrier"].sunk).toBeTruthy();
  });

  it("checks if all ships were sunk", () => {
    gameBoard.placeShip("carrier", 0, 0, "horizontal");
    gameBoard.receiveAttack(0, 0);
    gameBoard.receiveAttack(0, 1);
    gameBoard.receiveAttack(0, 2);
    gameBoard.receiveAttack(0, 3);
    gameBoard.receiveAttack(0, 4);

    gameBoard.placeShip("destroyer", 1, 0, "horizontal");
    gameBoard.receiveAttack(1, 0);
    gameBoard.receiveAttack(1, 1);
    gameBoard.receiveAttack(1, 2);

    gameBoard.placeShip("battleship", 2, 0, "horizontal");
    gameBoard.receiveAttack(2, 0);
    gameBoard.receiveAttack(2, 1);
    gameBoard.receiveAttack(2, 2);
    gameBoard.receiveAttack(2, 3);

    gameBoard.placeShip("submarine", 3, 0, "horizontal");
    gameBoard.receiveAttack(3, 0);
    gameBoard.receiveAttack(3, 1);
    gameBoard.receiveAttack(3, 2);

    gameBoard.placeShip("patrol boat", 4, 0, "horizontal");
    gameBoard.receiveAttack(4, 0);
    gameBoard.receiveAttack(4, 1);
    expect(gameBoard.checkIfAllShipsSunk()).toBeTruthy();
  });
});
