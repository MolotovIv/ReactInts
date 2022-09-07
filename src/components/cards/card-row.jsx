import Card from "./card/card";
import React from "react";

function Cardrow(props) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://62eb771c55d2bd170e6ed572.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="cards-row">
      {items.map((value) => (
        <Card
          key={value.id}
          title={value.title}
          img={value.img}
          price={value.price}
        />
      ))}
    </div>
  );
}
export default Cardrow;
