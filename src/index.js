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
        switchPlayerTurn();
        result = attackBoard.receiveAttack(row, col);
        return "Trying again";
      }
    }
  };

  const checkForWin = () => {
    if (
      userPlayer.board.checkIfAllShipsSunk() ||
      computerPlayer.board.checkIfAllShipsSunk()
    ) {
      return true;
    }
    return false;
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
    checkForWin,
  };
}

export function ScreenController(player) {
  const userBoardDiv = document.querySelector("#user-board");
  const computerBoardDiv = document.querySelector("#attack-board");
  const playerTurnDiv = document.querySelector("#player-turn");

  const game = GameController(player);
  playerTurnDiv.textContent = game.getActivePlayer().name;

  const updateUserBoard = () => {
    const userBoard = game.players[0].board.board;
    userBoardDiv.textContent = "";

    userBoard.forEach((row, rowIndex) => {
      row.forEach((column, colIndex) => {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;
        if (column.value !== "~" && column.value !== "*") {
          cellButton.classList.add("ship");
        }
        if (column.hit) {
          cellButton.classList.add("miss");
        }
        userBoardDiv.appendChild(cellButton);
      });
    });
  };

  const updateComputerBoard = () => {
    const computerBoard = game.players[1].board.board;
    // const computerShips = game.players[1].board.ships;
    computerBoardDiv.textContent = "";

    computerBoard.forEach((row, rowIndex) => {
      row.forEach((column, colIndex) => {
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;
        if (column.value !== "~" && column.value !== "*") {
          cellButton.classList.add("ship");
        }
        if (column.hit) {
          cellButton.classList.add("miss");
          if (
            (column.value === "c" ||
              column.value === "b" ||
              column.value === "d" ||
              column.value === "p" ||
              column.value === "s") &&
            column.hit
          ) {
            cellButton.classList.remove("miss");
            cellButton.classList.add("hit");
          }
        }
        computerBoardDiv.appendChild(cellButton);
      });
    });
  };

  function computerTurn() {
    const [row, col] = game.availableComputerMove();
    game.playRound(row, col);
    updateUserBoard();
    computerBoardDiv.addEventListener("click", clickHandlerBoard);
  }

  function clickHandlerBoard(e) {
    const selectedRow = e.target.dataset.row;
    const selectedColumn = e.target.dataset.column;

    if (!selectedColumn) return;
    if (!selectedRow) return;

    game.playRound(selectedRow, selectedColumn);
    computerBoardDiv.removeEventListener("click", clickHandlerBoard);
    updateUserBoard();
    updateComputerBoard();
    if (game.getActivePlayer() === game.players[1]) {
      setTimeout(computerTurn, 2000);
    } else {
      computerBoardDiv.addEventListener("click", clickHandlerBoard);
    }

    console.log(selectedRow, selectedColumn);
  }

  computerBoardDiv.addEventListener("click", clickHandlerBoard);
  updateUserBoard();
  updateComputerBoard();
  // game.placeShips();
}

// GameController();
ScreenController();
