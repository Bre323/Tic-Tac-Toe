import React from "react";
import '../styles/Game.css';

const Game = () => {
    return (
        <div className="game-ui">
            <div className="player-symbol">
                <h2>You</h2>
                <p className="symbol">X</p>                
            </div>

            <div className="game-board">
                <div className="board-square"></div>
                <div className="board-square"></div>
                <div className="board-square"></div>
                <div className="board-square"></div>
                <div className="board-square"></div>
                <div className="board-square"></div>
                <div className="board-square"></div>
                <div className="board-square"></div>
                <div className="board-square"></div>
            </div>
            
            <div className="player-symbol">
                <h2>CPU</h2>
                <p className="symbol">O</p> 
            </div>
        </div>
    )
}

export default Game;
