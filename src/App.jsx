import React from "react";
import StartMenu from './components/StartMenu.jsx';
import Game from './components/Game.jsx';

function App() {

  const selectSquare = (id) => {
    let boardSquare = document.getElementById(id);


    //console.log(boardSquare.innerHTML);
    if(boardSquare.innerHTML == "") {
      let symbol = document.createElement("p");
      symbol.classList.add("symbol");
      symbol.innerText = "X";

      boardSquare.appendChild(symbol);
    }
    else {
      console.log("you already clicked here!");
    }
  }

  const handleClick = () => {
    let startMenu = document.getElementById("start-menu");
    let gameUI = document.getElementById("game-ui");

    startMenu.style.display = "none";
    gameUI.style.display = "flex";
  }

  return (
    <div className="wrapper">
      <StartMenu handleClick= { handleClick } />
      <Game selectSquare={ selectSquare } />
    </div>
  )
}

export default App
