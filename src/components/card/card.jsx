import "./card.scss";
import React, { useState } from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img width={130} height={110} src={props.img} alt="staff"></img>
      </div>
      <h3>{props.title}</h3>
      <div className="card-price">
        <div className="card-bottom">
          <h4>Цена:</h4>
          <p>{props.price}</p>
        </div>
        <button>
          <img height={32} width={32} src="/img/card/Group 91.png"></img>
        </button>
      </div>
    </div>
  );
}
export default Card;
