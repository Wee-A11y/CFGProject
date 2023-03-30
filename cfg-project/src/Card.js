import React from "react";
import Form from "./Form";


//Anna if you write your code in here

export default function Card(){
    return (
        <div id="card">
            <img id="cardImage" src="./mountain.jpg"></img>
            <div>
                <span className="cardStats">Type of activity</span>
                <span className="cardStats">Location</span>
                <span className="cardStats">Price</span>
                <button className="cardStats"  type="submit" onClick={Form}>Buy</button>
            </div>
        </div>
    )
}
