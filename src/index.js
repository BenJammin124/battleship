import { Player } from "./player/player";
import "./styles.css";

export function GameController(
  playerOneName = "Player One",
  playerTwoName = "Enemy"
) {
  const userPlayer = new Player(playerOneName);
  const computerPlayer = new Player(playerTwoName);

  const players = [userPlayer, computerPlayer];

  // console.log(players);

  const placeShips = (arr) => {
    arr.forEach((player) => {
      player.board.autoPlaceShips();
    });
  };

  placeShips(players);

  let activePlayer = userPlayer;

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === userPlayer ? computerPlayer : userPlayer;
  };

  const getActivePlayer = () => {
    return activePlayer;
  };

  const printNewRound = () => {
    if (activePlayer === userPlayer) {
      computerPlayer.board.printBoard();
    } else if (activePlayer === computerPlayer) {
      userPlayer.board.printBoard();
    }
    console.log(`${getActivePlayer().name}'s turn.`);
  };

  const randomNumber = () => {
    const coord = Math.floor(Math.random() * 10);
    return coord;
  };

  const availableComputerMove = () => {
    const movesAvailable = computerPlayer.board.checkForAvailableSquares();
    const [row, col] =
      movesAvailable[Math.floor(Math.random() * movesAvailable.length)];

    return [row, col];
  };

  const playRound = (row, col) => {
    let attackBoard;
    let result;
    if (activePlayer === userPlayer) {
      attackBoard = computerPlayer.board;
      result = attackBoard.receiveAttack(row, col);
      if (result === "Miss!") {
        printNewRound();
        switchPlayerTurn();
        return "You missed!";
      } else if (result === "Hit!") {
        printNewRound();
        switchPlayerTurn();
        return "You hit a ship!";
      } else {
        return "Try again";
      }
    } else {
      attackBoard = userPlayer.board;
      result = attackBoard.receiveAttack(row, col);
      if (result === "Miss!") {
        printNewRound();
        switchPlayerTurn();
        return "The enemy missed!";
      } else if (result === "Hit!") {
        printNewRound();
        switchPlayerTurn();
        return "They hit your ship!";
      } else {
        const moves = attackBoard.checkForAvailableSquares();
        const [row, col] = moves[Math.floor(Math.random() * moves.length)];

        result = attackBoard.receiveAttack(row, col);
        return "Trying again";
      }
    }
  };

  return {
    getActivePlayer,
    switchPlayerTurn,
    printNewRound,
    placeShips,
    playRound,
    players,
    randomNumber,
    availableComputerMove,
  };
}

export function ScreenController(player) {
  const userBoardDiv = document.querySelector("#user-board");
  const computerBoardDiv = document.querySelector("#attack-board");
  const playerTurnDiv = document.querySelector("#player-turn");

  const game = GameController(player);

  const updateUserBoard = () => {
    const userBoard = game.players[0].board.board;

    userBoard.forEach((row, rowIndex) => {
      row.forEach((column, colIndex) => {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;
        if (column.value !== "~" && column.value !== "*") {
          cellButton.classList.add("ship");
        }
        userBoardDiv.appendChild(cellButton);
      });
    });
  };

  const updateComputerBoard = () => {
    const computerBoard = game.players[1].board.board;

    computerBoard.forEach((row, rowIndex) => {
      row.forEach((column, colIndex) => {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;
        if (column.value !== "~" && column.value !== "*") {
          cellButton.classList.add("ship");
        }
        computerBoardDiv.appendChild(cellButton);
      });
    });
  };
  updateUserBoard();
  updateComputerBoard();
  // game.placeShips();
}

// GameController();
ScreenController();
