import { Player } from "./player/player";
import "./styles.css";

export function GameController(
  playerOneName = "User",
  playerTwoName = "Computer"
) {
  let userPlayer = new Player(playerOneName);
  let computerPlayer = new Player(playerTwoName);

  const players = [userPlayer, computerPlayer];

  const placeShips = (arr) => {
    arr.forEach((player) => {
      player.board.autoPlaceShips();
    });
  };

  const placeComputerShips = () => {
    players[1].board.autoPlaceShips();
  };

  const placeAShip = (name, rowStart, colStart, orientation) => {
    userPlayer.board.placeShip(name, rowStart, colStart, orientation);
  };

  let activePlayer = userPlayer;

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === userPlayer ? computerPlayer : userPlayer;
  };

  const getActivePlayer = () => {
    return activePlayer;
  };

  const setActivePlayer = (player) => {
    activePlayer = player;
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

  const reset = () => {
    players.forEach((player) => {
      player.board.resetGame();
    });
    placeShips(players);
  };

  return {
    getActivePlayer,
    setActivePlayer,
    switchPlayerTurn,
    printNewRound,
    placeShips,
    playRound,
    players,
    randomNumber,
    availableComputerMove,
    checkForWin,
    reset,
    placeAShip,
    placeComputerShips,
  };
}

export function ScreenController(player) {
  const userBoardDiv = document.querySelector("#user-board");
  const computerBoardDiv = document.querySelector("#attack-board");
  const playerTurnDiv = document.querySelector("#player-turn");
  const modal = document.querySelector(".winner-modal");
  const winner = document.querySelector(".winner");
  const playAgain = document.querySelector(".play-again");
  const selectShips = document.querySelector(".select-ships");
  const randomShips = document.querySelector(".random-button");
  const hint = document.querySelector(".hintLi");

  const game = GameController(player);
  playerTurnDiv.textContent = game.getActivePlayer().name;

  const boardToSetShips = () => {
    const userBoard = game.players[0].board.board;
    const setShipsBoardDiv = document.querySelector("#set-user-ships");
    setShipsBoardDiv.textContent = "";

    userBoard.forEach((row, rowIndex) => {
      row.forEach((column, colIndex) => {
        const cellButton = document.createElement("div");
        cellButton.classList.add("cell");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;
        if (column.value !== "~" && column.value !== "*") {
          cellButton.classList.add("ship");
        }

        setShipsBoardDiv.appendChild(cellButton);
      });
    });
    attachBoardCellListeners();
  };

  const updateUserBoard = () => {
    const userBoard = game.players[0].board.board;
    userBoardDiv.textContent = "";
    playerTurnDiv.textContent = `${game.getActivePlayer().name}'s turn`;

    userBoard.forEach((row, rowIndex) => {
      row.forEach((column, colIndex) => {
        const cellButton = document.createElement("div");
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
        userBoardDiv.appendChild(cellButton);
      });
    });
  };

  const updateComputerBoard = () => {
    const computerBoard = game.players[1].board.board;

    computerBoardDiv.textContent = "";
    playerTurnDiv.textContent = `${game.getActivePlayer().name}'s turn`;

    computerBoard.forEach((row, rowIndex) => {
      row.forEach((column, colIndex) => {
        const cellButton = document.createElement("div");
        cellButton.classList.add("cell");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;

        if (column.hit) {
          cellButton.classList.add("miss");
          cellButton.classList.add("clicked");
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
            cellButton.classList.add("clicked");
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
    updateShipHealth(game.players[0], ".ships-container-player");
    updateShipHealth(game.players[1], ".ships-container-computer");

    if (checkForWinner()) return;
    computerBoardDiv.addEventListener("click", clickHandlerBoard);
  }

  function clickHandlerBoard(e) {
    const selectedRow = e.target.dataset.row;
    const selectedColumn = e.target.dataset.column;

    if (!selectedColumn) return;
    if (!selectedRow) return;

    game.playRound(selectedRow, selectedColumn);

    // game.playRound(selectedRow, selectedColumn);
    computerBoardDiv.removeEventListener("click", clickHandlerBoard);
    updateUserBoard();
    updateComputerBoard();
    updateShipHealth(game.players[0], ".ships-container-player");
    updateShipHealth(game.players[1], ".ships-container-computer");
    if (checkForWinner()) return;

    if (game.getActivePlayer() === game.players[1]) {
      setTimeout(computerTurn, 1000);
    } else {
      computerBoardDiv.addEventListener("click", clickHandlerBoard);
    }

    console.log(selectedRow, selectedColumn);
  }

  function checkForWinner() {
    if (game.checkForWin()) {
      if (game.getActivePlayer() === game.players[1]) {
        displayWinModal(game.players[0].name);
        return true;
      } else {
        displayWinModal(game.players[1].name);
        return true;
      }
    }
    return false;
  }

  function displayWinModal(winnerName) {
    winner.textContent = `${winnerName} wins!`;
    modal.showModal();
    console.log("dodue");

    playAgain.addEventListener("click", resetGame);
  }

  function resetGame() {
    const setShips = document.querySelector(".set-ships");
    const buttons = document.querySelector(".buttons");
    const mainContent = document.querySelector("#content");
    game.reset();
    game.setActivePlayer(game.players[0]);
    updateUserBoard();
    updateComputerBoard();
    updateShipHealth(game.players[0], ".ships-container-player");
    updateShipHealth(game.players[1], ".ships-container-computer");
    setShips.style.display = "";
    buttons.style.display = "flex";
    mainContent.style.display = "none";
    hint.innerHTML = `Drag Ships onto board. Click ships to rotate before dragging.<br />
            Ships cannot move once placed.`;
    shipState.resetShips();
    modal.close();
    computerBoardDiv.addEventListener("click", clickHandlerBoard);
  }

  function updateShipHealth(player, container) {
    const shipContainer = document.querySelector(container);
    shipContainer.innerHTML = "";
    const shipsHealth = player.board.shipsHits();

    shipsHealth.forEach((ship) => {
      const shipBars = document.createElement("div");
      shipBars.classList.add("flex-ship");
      shipBars.id = ship[0].toLowerCase().replace(" ", "-");

      for (let i = 0; i < ship[2]; i++) {
        const shipPart = document.createElement("div");
        shipPart.classList.add("ship", "health");
        if (i < ship[1]) {
          shipPart.classList.add("destroyed");
        }
        shipBars.append(shipPart);
      }
      shipContainer.append(shipBars);
    });
  }

  boardToSetShips();
  computerBoardDiv.addEventListener("click", clickHandlerBoard);
  updateUserBoard();
  updateComputerBoard();

  let shipState = saveShipsToSet();

  function saveShipsToSet() {
    const board = document.querySelector(".board");
    const resetButton = document.querySelector(".reset-button");

    const initialShipState = [...selectShips.children].map((container) => {
      return {
        element: container,
        parent: container.parentNode,
        nextSibling: container.nextElementSibling,
      };
    });
    console.log(initialShipState);
    console.log(board);

    function resetShips() {
      initialShipState.forEach(({ element, parent, nextSibling }) => {
        if (nextSibling) {
          parent.append(element);
        } else {
          parent.append(element);
        }
      });
      clearBoard();
    }

    function clearBoard() {
      const cells = board.querySelectorAll(".cell");
      game.players[0].board.resetGame();
      game.players[0].board.board.forEach((cell) => {
        cell.value = "~";
      });
      cells.forEach((cell) => {
        cell.classList.remove("hit", "miss", "ship", "clicked");
        cell.style.backgroundColor = "";
      });
      updateUserBoard();
    }
    resetButton.addEventListener("click", resetShips);
    return {
      initialShipState,
      resetShips,
      clearBoard,
    };
  }

  document.addEventListener("DOMContentLoaded", shipState);

  let draggedShip = null;
  let currentOrientation = "horizontal";
  // eslint-disable-next-line no-unused-vars
  let isDragging = false;

  const optionShips = Array.from(selectShips.children);
  optionShips.forEach((ship) => {
    ship.addEventListener("dragstart", dragStart);
    ship.addEventListener("dragend", dragEnd);
    ship.addEventListener("click", changeOrientation);
  });

  function dragStart(e) {
    draggedShip = e.target;
    currentOrientation = draggedShip.dataset.orient;
    isDragging = true;

    console.log(
      `Drag started: ${draggedShip.dataset.id}, Orientation: ${currentOrientation}`
    );
  }

  function dragEnd() {
    isDragging = false;
    draggedShip = null;

    console.log("Drag ended");
  }

  function changeOrientation(e) {
    const shipContainer = e.currentTarget;
    console.log(shipContainer);
    const currentOrientation = shipContainer.dataset.orient;
    const newOrientation =
      currentOrientation === "horizontal" ? "vertical" : "horizontal";
    shipContainer.dataset.orient = newOrientation;

    shipContainer.classList.toggle(
      "horizontal",
      newOrientation === "horizontal"
    );
    shipContainer.classList.toggle("vertical", newOrientation === "vertical");
  }

  function attachBoardCellListeners() {
    const allPlayerSquares = document.querySelectorAll("#set-user-ships div");
    allPlayerSquares.forEach((playerSquare) => {
      playerSquare.addEventListener("dragover", dragOver);
      playerSquare.addEventListener("drop", dropShip);
      playerSquare.addEventListener("dragenter", dragEnter);
      playerSquare.addEventListener("dragleave", dragLeave);
    });
  }

  function dragEnter(e) {
    if (e.target.classList.contains("cell")) {
      e.target.classList.add("dragover");
    }
  }

  function dragLeave(e) {
    if (e.target.classList.contains("cell")) {
      e.target.classList.remove("dragover");
    }
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dropShip(e) {
    if (draggedShip === null) return;
    const startId = [e.target.dataset.row, e.target.dataset.column];
    const ship = game.players[0].board.ships[draggedShip.dataset.id];
    const orientation = draggedShip.dataset.orient;
    game.placeAShip(
      ship.name,
      parseInt(startId[0]),
      parseInt(startId[1]),
      orientation
    );

    if (ship.placed) {
      draggedShip.remove();
    }
    boardToSetShips();
  }

  function randomPlacement() {
    resetGame();
    game.placeShips(game.players);
    selectShips.textContent = "";
    boardToSetShips();
  }

  function justComputerRandomShips() {
    game.placeComputerShips();
    updateComputerBoard();
  }

  randomShips.addEventListener("click", randomPlacement);
  updateShipHealth(game.players[0], ".ships-container-player");
  updateShipHealth(game.players[1], ".ships-container-computer");

  return {
    updateUserBoard,
    updateComputerBoard,
    justComputerRandomShips,
  };
}

function StartGame() {
  const startGame = document.querySelector(".start-button");
  const mainContent = document.querySelector("#content");
  const setShips = document.querySelector(".set-ships");
  const buttons = document.querySelector(".buttons");
  const selectShips = document.querySelector(".select-ships");
  const hint = document.querySelector(".hintLi");

  const game = ScreenController();
  function start() {
    if (selectShips.children.length > 0) return;
    game.updateUserBoard();
    game.justComputerRandomShips();
    mainContent.style.display = "flex";
    setShips.style.display = "none";
    buttons.style.display = "none";
    hint.innerHTML = `Click board to attack. <span class="hit">Red</span> is a hit, <span class="miss">Green</span> is a miss.`;
  }

  startGame.addEventListener("click", start);
}

StartGame();
