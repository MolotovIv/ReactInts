import { Link } from "react-router-dom";

function IconsList() {
  return (
    <div>
      <ul className="header-list">
        <Link to="basket">
          <li>
            <img src="/img/case.png" alt="heart icon"></img>
          </li>
        </Link>

        <li>
          <img src="/img/vector.png" alt="icon"></img>
        </li>
        <li>
          <img src="/img/union.png" alt="icon"></img>
        </li>
      </ul>
    </div>
  );
}

export default IconsList;
