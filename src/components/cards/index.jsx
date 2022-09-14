import Card from "./card";
import React from "react";
import Categories from "../categories";
import { homeContext } from "../home";
import { useSelector, useDispatch } from "react-redux";
import { setActiveClass } from "../../redux/slices/filterSlice";

function Cardrow() {
  const category = useSelector((state) => state.filterSlice.category);

  const dispatch = useDispatch();
  const onChangeCategory = (id) => {
    dispatch(setActiveClass(id));
  };

  const { inputValue } = React.useContext(homeContext);
  const [items, setItems] = React.useState([]);
  const search = inputValue ? `search=${inputValue}` : "";
  const active = category ? `&category=${category}` : "";

  React.useEffect(() => {
    fetch(
      `https://62eb771c55d2bd170e6ed572.mockapi.io/items?${search}${active}`
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, [category, inputValue]);

  return (
    <>
      <Categories
        category={category}
        onChangeCategory={(i) => {
          onChangeCategory(i);
        }}
      />
      <div className="cards-row">
        {items.map((value, index) => (
          <Card
            key={index}
            title={value.title}
            img={value.img}
            price={value.price}
          />
        ))}
      </div>
    </>
  );
}
export default Cardrow;
