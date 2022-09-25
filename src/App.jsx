import Header from "./components/header";
import { Home } from "./components/home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
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
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Routes>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
