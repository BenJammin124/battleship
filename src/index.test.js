import { describe, expect, it, beforeEach } from "@jest/globals";
// import { Player } from "./player/player";
import { GameController } from "./index";

describe("game functions", () => {
  let game;
  let userBoard;
  let computerBoard;

  beforeEach(() => {
    game = GameController();
    userBoard = game.players[0].board.board;
    computerBoard = game.players[1].board.board;
  });

  it("gets active player", () => {
    expect(game.getActivePlayer().name).toBe("Player One");
  });

  it("user attacks, then computer attacks", () => {
    console.log("Initial active player:", game.getActivePlayer().name);
    expect(game.playRound(0, 2)).toBe("You missed!");
    console.log("Active player after first move:", game.getActivePlayer().name);
    expect(game.getActivePlayer().name).toBe(game.players[1].name);
    expect(computerBoard[0][2].hit).toBeTruthy();
    const [row, col] = game.availableComputerMove();
    expect(game.playRound(row, col)).toBe("The enemy missed!");

    // function checkHitProperty(arr) {
    //   for (let i = 0; i < 10; i++) {
    //     for (let j = 0; j < 10; j++) {
    //       if (arr[i][j].hit === true) {
    //         return true;
    //       }
    //     }
    //     return false;
    //   }
    // }

    function checkHitProperty(arr) {
      return arr.some((row) => row.some((obj) => obj.hit === true));
    }
    expect(checkHitProperty(userBoard)).toBeTruthy();
  });
});
