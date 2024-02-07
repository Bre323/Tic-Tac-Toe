import React from "react";
import '../styles/StartMenu.css';

const StartMenu = ({ handleClick }) => {
    return (
        <div id="start-menu" className="start-menu">
            <h1>Tic Tac Toe</h1>
            <button onClick= { handleClick }>Start</button>
        </div>
    )
}

export default StartMenu;
