import React from "react";
import StartMenu from './components/StartMenu.jsx';
import Game from './components/Game.jsx';

function App() {

  /*
  const showGame = () => {

  }
  */

  const handleClick = () => {
    /*
    let startMenu = document.getElementById("start-menu");

    startMenu.style.display = "none";
    showGame();
    */
  }

  return (
    <div className="wrapper">
      <StartMenu handleClick= { handleClick } />
      <Game />
    </div>
  )
}

export default App
