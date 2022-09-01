import Categories from "./components/categories/categories";
import Header from "./components/header/header";
import Search from "./components/Search/search";
import Cardrow from "./components/cards/card-row";

function App() {
  return (
    <div className="wpapper">
      <Header />

      <div className="content">
        <h1>Все вещи</h1>
        <Search />
        <Categories />
        <Cardrow />
      </div>
    </div>
  );
}

export default App;
