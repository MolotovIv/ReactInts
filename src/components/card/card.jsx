import "./card.scss";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlices";

function Card({ img, title, price, id }) {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      img,
    };
    dispatch(addItems(item));
  };

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
        <button onClick={onClickAdd}>
          <img height={32} width={32} src="/img/card/Group 91.png"></img>
        </button>
      </div>
    </div>
  );
}
export default Card;
