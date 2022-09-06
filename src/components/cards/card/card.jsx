import "./card.scss";
import React, { useState } from "react";

function Card(props) {
  const [itemsNumber, setItemsNumber] = useState(0);

  return (
    <div className="card">
      <div className="card-image">
        <img width={130} height={110} src={props.img} alt="staff"></img>
      </div>
      <h3>{props.title}</h3>
      <div className="card-price">
        <div className="card-bottom">
          <h4>Цена:</h4>
          <p>{itemsNumber == 0 ? props.price : props.price * itemsNumber}</p>
        </div>
        <button onClick={() => setItemsNumber(itemsNumber + 1)}>
          <img height={32} width={32} src="/img/card/Group 91.png"></img>
        </button>
        <div className="card-number">
          <h4>Штук :</h4>
          {itemsNumber}
        </div>
      </div>
    </div>
  );
}
export default Card;
