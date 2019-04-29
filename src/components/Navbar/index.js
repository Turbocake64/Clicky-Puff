import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <div><a href="/"><p className="partitle">Clicky Puff!</p></a></div>

            <div className="clicktostart"><p className="par par1">Click Someone to Get Started!</p></div>
            <div><p className=" par par2">Score: {props.score}</p> </div>
            <div><p className="par par3">Losses: {props.losses}</p> </div>
            <div><p className="par par4">High Score: {props.highScore}</p> </div>
        </nav>
    );
}

export default Navbar;