import Header from "./components/header/header";
import { Home } from "./components/home";
import { Routes, Route } from "react-router-dom";
import { Basket } from "./pages/basket/basket";

function App() {
  return (
    <div className="wpapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
