import "./search.scss";
function Search() {
  return (
    <div>
      <div className="sort">
        <div className="sort__label">
          <input className="searchInput" placeholder="Поиск"></input>
        </div>
        <div className="sort__popup">
          <ul>
            <li className="active">размеру</li>
            <li>цене</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Search;
