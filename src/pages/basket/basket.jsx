import React from "react";
import "./basket.scss";
import { useSelector, useDispatch } from "react-redux";
import CardBasket from "./CardBasket";
import { clearItems } from "../../redux/slices/cartSlices";

export const Basket = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const clear = () => {
    dispatch(clearItems());
  };

  return (
    <>
      <div className="basketTop">
        <h1>КОРЗИНА</h1>
        <button onClick={clear}>ОЧИСТИТЬ ВСЕ</button>
      </div>
      <div className="row">
        {items.map((value, index) => (
          <CardBasket
            key={index}
            title={value.title}
            img={value.img}
            price={value.price}
            id={value.id}
          />
        ))}
      </div>
      <div className="basketGround">
        <h3>
          всего вещей =<span>{items.length}</span>
        </h3>
        <h3>
          итоговая цена = <span>{totalPrice}</span>
        </h3>
      </div>
    </>
  );
};
