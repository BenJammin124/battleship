import { describe, expect, it, beforeEach } from "@jest/globals";
import { GameBoard } from "../gameboard/gameboard";
import { Player } from "./player";

describe("player creation and board assignment", () => {
  let gameBoard;
  let battleships;
  let player;

  beforeEach(() => {
    gameBoard = new GameBoard();
    battleships = gameBoard.ships;
    player = new Player();
  });

  it("creates 'real' player", () => {
    expect(gameBoard).toBeDefined();
    expect(battleships["carrier"]).toBeDefined();
    expect(player).toBeDefined();
  });
});
