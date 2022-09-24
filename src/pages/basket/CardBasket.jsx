import "./cartBasket.scss";
import React from "react";

function CardBasket({ img, title, price, id }) {
  return (
    <div className="card">
      <div className="card-image">
        <img width={130} height={110} src={img} alt="staff"></img>
      </div>
      <h3>{title}</h3>
      <div className="card-price">
        <div className="card-bottom">
          <h4>Цена:</h4>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default CardBasket;
