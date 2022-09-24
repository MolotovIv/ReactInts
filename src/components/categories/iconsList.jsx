import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./categories.scss";

function IconsList() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  return (
    <div style={{ paddingRight: "30px" }}>
      <ul className="header-list">
        <Link to="basket">
          <li>
            <img src="/img/case.png" alt="heart icon"></img>
          </li>
        </Link>

        <li>{totalPrice}</li>
        <li>{items.length}</li>
      </ul>
    </div>
  );
}

export default IconsList;
