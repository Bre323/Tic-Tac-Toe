import React from "react";
import '../styles/Result.css';

const Result = ({ handleReset }) => {
    return (
        <div id="result" className="result">
            <h1 id="result-text"></h1>
            <button onClick= { handleReset }>Reset</button>
        </div>
    )
}

export default Result;
