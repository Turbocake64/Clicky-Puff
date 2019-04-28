import React from "react";
import "./style.css";

function CharacterCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt={props.name} />
            </div>
        </div>
    );
}

export default CharacterCard;