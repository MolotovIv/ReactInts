import Card from "./card/card";
import React from "react";
import Categories from "./categories/categories";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../redux/slices/filterSlice";

function Cardrow({ inputValue }) {
  const category = useSelector((state) => state.filterSlice.category);

  const dispatch = useDispatch();
  const onChangeCategory = (index) => {
    dispatch(setActiveCategory(index));
  };

  const [items, setItems] = React.useState([]);
  const search = inputValue ? `search=${inputValue}` : "";
  const active = category ? `&category=${category}` : "";

  React.useEffect(() => {
    fetch(
      `https://62eb771c55d2bd170e6ed572.mockapi.io/items?${search}${active}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        console.log(items);
      });
  }, [category, inputValue]);

  return (
    <>
      <Categories category={category} onChangeCategory={onChangeCategory} />
      <div className="cards-row">
        {items.map((value, index) => (
          <Card
            key={index}
            title={value.title}
            img={value.img}
            price={value.price}
            id={value.id}
          />
        ))}
      </div>
    </>
  );
}
export default Cardrow;
