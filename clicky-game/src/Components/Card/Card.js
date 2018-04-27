import React from "react";

const Card = props => (
    <div className = "kitty-card">
        <img alt = 'kitty' src={props.image} onClick={() => props.clickKitty(props.id)}/>
    </div>
);

export default Card;