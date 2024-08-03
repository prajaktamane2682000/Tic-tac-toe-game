let boxes = document.querySelectorAll("#BOX");
let resetbtn = document.querySelector("#reset-button");
let newbtn = document.querySelector("#new-button");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const WinPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//to play the game
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});
let board = Array(9).fill(null);
//This function will checks the winner
const checkWinner = () => {
  for (let pattern of WinPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner", pos1);
        showWinner(pos1);
      }
    }
  }
};

//This will show the winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations you are the winner ${winner} `;
  msgcontainer.classList.remove("hide");
  disabledBoxes();
};

const matchDraw = () => {
  msg.innerText = "Match Draw! Play Again.";
  msgcontainer.classList.remove("hide");
  disabledBoxes();
};
//Once we get the winner we have to disable the boxes

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

//This will reset the game

const resetGame = () => {
  turnO = true;
  enabledBoxes();
  msgcontainer.classList.add("hide");
};
const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);
