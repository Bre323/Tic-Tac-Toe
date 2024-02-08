import React from "react";
import StartMenu from './components/StartMenu.jsx';
import Game from './components/Game.jsx';
import Result from "./components/Result.jsx";

let board = ["", "", "", "", "", "", "", "", ""];



function App() {

  const openResult = (value) => {
    let gameUI = document.getElementById("game-ui");
    let result = document.getElementById("result");
    let resultText = document.getElementById("result-text");
    gameUI.style.display = "none";
    result.style.display = "block";

    if(value === "X") {
      resultText.innerText = "You're a Winner!";
    }
    else if (value === "O") {
      resultText.innerText = "You Lost!";
    }
    else {
      resultText.innerText = "Tie!";
    }
  }


  const checkRows = () => {
    if(board[0] === "X" && board[1] === "X" && board[2] === "X" ||
      board[3] === "X" && board[4] === "X" && board[5] === "X" ||
      board[6] === "X" && board[7] === "X" && board[8] === "X") {
        console.log("Row completed");
        return "win";
    }

    else if(board[0] === "O" && board[1] === "O" && board[2] === "O" ||
      board[3] === "O" && board[4] === "O" && board[5] === "O" ||
      board[6] === "O" && board[7] === "O" && board[8] === "O") {
        console.log("Row completed");
        return "loss";
    }

  }


  const checkColumns = () => {
    if(board[0] === "X" && board[3] === "X" && board[6] === "X" ||
      board[1] === "X" && board[4] === "X" && board[7] === "X" ||
      board[2] === "X" && board[5] === "X" && board[8] === "X") {
        console.log("Column completed");
        return "win";
    }

    else if(board[0] === "O" && board[3] === "O" && board[6] === "O" ||
      board[1] === "O" && board[4] === "O" && board[7] === "O" ||
      board[2] === "O" && board[5] === "O" && board[8] === "O") {
        console.log("Column completed");
        return "loss";
    }
  }


  const checkDiagonal = () => {
    if(board[0] === "X" && board[4] === "X" && board[8] === "X" ||
      board[2] === "X" && board[4] === "X" && board[6] === "X") {
        console.log("Diagonal completed");
        return "win";
    }

    else if(board[0] === "O" && board[4] === "O" && board[8] === "O" ||
    board[2] === "O" && board[4] === "O" && board[6] === "O") {
      console.log("Diagonal completed");
      return "loss";
    }
  }


  const checkBoard = () => {
    if(checkRows() === "win" || checkColumns() === "win" || checkDiagonal() === "win") {
      openResult("X");
    }
    else if(checkRows() === "loss" || checkColumns() === "loss" || checkDiagonal() === "loss") {
      openResult("O");
    }
    else {
      if(board.includes("") === false) {
        openResult("tie");
      }
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

    console.log(startMenu);
    console.log(gameUI);
    startMenu.style.display = "none";
    gameUI.style.display = "flex";
  };


  const handleReset = () => {
    let gameUI = document.getElementById("game-ui");
    let result = document.getElementById("result");

    for(let i = 0; i < board.length ; i++) {
      document.getElementById(`board-square-${i + 1}`).innerHTML = "";
      board[i] = "";
    }
    result.style.display = "none";
    gameUI.style.display = "flex";
    console.log(board);
  }



  return (
    <div className="wrapper">
      <StartMenu handleClick= { handleClick } />
      <Game selectSquare={ selectSquare } />
      <Result handleReset={ handleReset } />
    </div>
  )
};



export default App;
