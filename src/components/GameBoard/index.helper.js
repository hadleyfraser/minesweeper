import { BOMB, COLS, ROWS, TOTAL_BOMBS } from "../constants";

export function generateBoard() {
  const gameboard = [];
  for (let row = 0; row < ROWS; row++) {
    gameboard[row] = [];
    for (let col = 0; col < COLS; col++) {
      gameboard[row][col] = "";
    }
  }

  let totalBombs = 0;
  let count = 0;
  while (totalBombs < TOTAL_BOMBS && count < 100) {
    const row = getRandomInt(ROWS);
    const col = getRandomInt(COLS);
    if (!gameboard[row][col]) {
      totalBombs++;
      gameboard[row][col] = BOMB;
    }
  }

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      if (!gameboard[row][col]) {
        const totalBombs = bombsByMe(gameboard, row, col);
        gameboard[row][col] = totalBombs || "";
      }
    }
  }

  return gameboard;
}

function bombsByMe(board, row, col) {
  let totalBombs = 0;
  for (let r = -1; r <= 1; r++) {
    for (let c = -1; c <= 1; c++) {
      const checkRow = row + r;
      const checkCol = col + c;
      if (
        (r || c) &&
        checkRow >= 0 &&
        checkRow < ROWS &&
        checkCol >= 0 &&
        checkCol < COLS &&
        board[checkRow][checkCol] === BOMB
      ) {
        totalBombs++;
      }
    }
  }

  return totalBombs;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
