import { Link } from "react-router-dom";
import Toggler from "./categories/toggler";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/slices/userSlice";

function Header() {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="headerleft">
        <Link to="/" style={{ display: "flex" }}>
          <img
            width={40}
            height={40}
            id="logo"
            src="/img/logo.png"
            alt="logo"
          ></img>

          <div className="header-info">
            <h2>SOMEFLEX STORE</h2>
            <h4>Магазин спортивной одежды</h4>
          </div>
        </Link>
        <Toggler />
      </div>
      <div className=" header-right">
        <button onClick={() => dispatch(removeUser())}>ВЫЙТИ</button>
      </div>
    </header>
  );
}
export default Header;
