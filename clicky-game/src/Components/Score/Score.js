import React from "react";

const Score = props => (
    <div className = "container score-panel">
        <div className="row">
            <div className="col-lg-4">
                <p className="title">Clicky-Kitty-Game</p>
            </div>
            <div className="col-lg-2">
                <span className={props.message="You lost!"}>
                {props.message}</span>
            </div>
            <div className="col-lg-2">
                <span className="Score"> {" "} Score: {props.score}</span>
            </div>
        </div>
    </div>
);

export default Score;