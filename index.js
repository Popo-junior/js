const gameboard = document.getElementById("gameboard");
const boxes = Array.from(document.getElementsByClassName("box"));
const restartBtn = document.getElementById("restartBtn");
const playText = document.getElementById("playText");
const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = O_TEXT;

const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += `border-bottom: 2px solid var(--black);`;
    }
    if (index % 3 === 0) {
      styleString += `border-right: 2px solid var(--black);`;
    }
    if (index % 3 === 2) {
      styleString += `border-left: 2px solid var(--black);`;
    }
    if (index > 5) {
      styleString += `border-top: 2px solid var(--black);`;
    }
    box.style = styleString;

    box.addEventListener("click", boxClicked);
  });
};

function boxClicked(e) {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (hasPlayerWon(currentPlayer)) {
      playText.innerHTML = `${currentPlayer} wins!!`;
      return;
    };
    currentPlayer = currentPlayer == O_TEXT ? X_TEXT : O_TEXT;
  };
};

const hasPlayerWon = (player) => {
  if (spaces[0] == player) {
    if (spaces[1] == player && spaces[2] == player) {
      console.log(`${player} wins up top`);
      return true;
    }
    if (spaces[3] == player && spaces[6] == player) {
      console.log(`${player} wins on the left`);
      return true;
    }
    if (spaces[4] == player && spaces[8] == player) {
      console.log(`${player} wins on the diagonal`);
      return true;
    }
  }
  if (spaces[8] == player) {
    if (spaces[2] == player && spaces[5] == player) {
      console.log(`${player} wins on the right`);
      return true;
    }
    if (spaces[7] == player && spaces[6] == player) {
      console.log(`${player} wins on the bottom`);
      return true;
    }
  }
  if (spaces[4] == player) {
    if (spaces[3] == player && spaces[5] == player) {
      console.log(`${player} wins on the middle horizontal`);
      return true;
    }
    if (spaces[1] == player && spaces[7] == player) {
      console.log(`${player} wins on the middle vertical`);
      return true;
    }
  }
};

restartBtn.addEventListener("click", () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playText.innerHTML = `TIC TAC TOE!!`;

  currentPlayer = O_TEXT;
});

drawBoard();


