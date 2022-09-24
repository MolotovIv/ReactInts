import Header from "./components/header";
import { Home } from "./components/home";
import { Routes, Route } from "react-router-dom";
import { Basket } from "./pages/basket/basket";
import Layout from "./components/Layout";
import { ThemeProvider } from "../src/context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="basket" element={<Basket />} />
            </Routes>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
