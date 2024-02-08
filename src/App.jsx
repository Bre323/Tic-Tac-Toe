import React from "react";
import StartMenu from './components/StartMenu.jsx';
import Game from './components/Game.jsx';

let board = ["", "", "", "", "", "", "", "", ""];


function App() {

  const checkBoard = () => {
    //Check Rows
    if(board[0] === board[1] === board[2] === "X" ||
      board[3] === board[4] === board[5] === "X" ||
      board[6] === board[7] === board[8] === "X") {
        return "Winner!";
    }
    else if(board[0] === board[1] === board[2] === "X" ||
      board[3] === board[4] === board[5] === "X" ||
      board[6] === board[7] === board[8] === "X") {
        return "Loser!";
    }

    //Check Columns
    if(board[0] === board[3] === board[6] === "X" ||
      board[1] === board[4] === board[7] === "X" ||
      board[2] === board[5] === board[8] === "X") {
        return "Winner!";
    }
    else if(board[0] === board[3] === board[6] === "O" ||
      board[1] === board[4] === board[7] === "O" ||
      board[2] === board[5] === board[8] === "O") {
        return "Loser!";
    }

    //Check Diagonal
    if(board[0] === board[4] === board[8] === "X" ||
      board[2] === board[4] === board[6] === "X") {
        return "Winner!";
    }
    else if(board[0] === board[4] === board[8] === "O" ||
    board[2] === board[4] === board[6] === "O") {
        return "Loser!";
    }
  };

  const playBotRound = () => {
    let randomPosition = Math.floor((Math.random() * 9) + 1);
    let boardSquare = document.getElementById(`board-square-${randomPosition}`);

    if(boardSquare.innerHTML == "") {
      let symbol = document.createElement("p");
      symbol.classList.add("symbol");
      symbol.innerText = "O";

      boardSquare.appendChild(symbol);
      board[randomPosition - 1] = "O";
      console.log(board);
      checkBoard();
    }
    else {
      if(board.includes("")) {
        console.log("Not Empty!");
        playBotRound();
      }
    }
  };

  const selectSquare = (id) => {
    let boardSquare = document.getElementById(`board-square-${id}`);

    if(boardSquare.innerHTML == "") {
      let symbol = document.createElement("p");
      symbol.classList.add("symbol");
      symbol.innerText = "X";

      boardSquare.appendChild(symbol);
      board[id - 1] = "X";
      console.log(board);
      checkBoard();
      playBotRound();
    }
    else {
      console.log("you already clicked here!");
    }
  };

  const handleClick = () => {
    let startMenu = document.getElementById("start-menu");
    let gameUI = document.getElementById("game-ui");

    startMenu.style.display = "none";
    gameUI.style.display = "flex";
  };

  return (
    <div className="wrapper">
      <StartMenu handleClick= { handleClick } />
      <Game selectSquare={ selectSquare } />
    </div>
  )
};


export default App;
