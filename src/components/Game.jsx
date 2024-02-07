import React from "react";
import '../styles/Game.css';

const Game = ({ selectSquare }) => {
    return (
        <div id="game-ui" className="game-ui">
            <div className="player-symbol">
                <h2>You</h2>
                <p className="symbol">X</p>                
            </div>

            <div className="game-board">
                <div id="board-square-1" className="board-square" onClick={ () => selectSquare("board-square-1") }></div>
                <div id="board-square-2" className="board-square" onClick={ () => selectSquare("board-square-2") }></div>
                <div id="board-square-3" className="board-square" onClick={ () => selectSquare("board-square-3") }></div>
                <div id="board-square-4" className="board-square" onClick={ () => selectSquare("board-square-4") }></div>
                <div id="board-square-5" className="board-square" onClick={ () => selectSquare("board-square-5") }></div>
                <div id="board-square-6" className="board-square" onClick={ () => selectSquare("board-square-6") }></div>
                <div id="board-square-7" className="board-square" onClick={ () => selectSquare("board-square-7") }></div>
                <div id="board-square-8" className="board-square" onClick={ () => selectSquare("board-square-8") }></div>
                <div id="board-square-9" className="board-square" onClick={ () => selectSquare("board-square-9") }></div>
            </div>
            
            <div className="player-symbol">
                <h2>CPU</h2>
                <p className="symbol">O</p> 
            </div>
        </div>
    )
}

export default Game;
