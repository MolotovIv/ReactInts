import "./categories.scss";

function Categories() {
  return (
    <div className="content-top">
      <div className="categories">
        <ul>
          <li>Футболки</li>
          <li>Кофты</li>
          <li>Штаны</li>
        </ul>
      </div>
      <div>
        <ul className="header-list">
          <li>
            <img src="/img/case.png" alt="heart icon"></img>
            <span>1205</span>
          </li>
          <li>
            <img src="/img/vector.png" alt="icon"></img>
          </li>
          <li>
            <img src="/img/union.png" alt="icon"></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
