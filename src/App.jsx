import { useState } from "react";
import "./App.css";
import MainPage from "./MainPage";
import ProductPage from "./ProductPage";
import Navbar from "./Navbar";
import MostSelling from "./MostSelling";
import AllProductsPage from "./AllProductsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <>
      <Router>
        <Navbar cart={cartCount} />
        <Routes>
          <Route
            path="/"
            element={<MainPage count={cartCount} setCartCount={setCartCount} />}
          />
          <Route
            path="/allProduct"
            element={
              <AllProductsPage count={cartCount} setCartCount={setCartCount} />
            }
          />
          <Route
            path="/buy"
            element={
              <ProductPage count={cartCount} setCartCount={setCartCount} />
            }
          />
          {/* <Route
          path="/hi"
          element={
          <MostSelling count={cartCount} setCartCount={setCartCount} />
          }
          /> */}
        </Routes>
        <Footer />
      </Router>
      {/* <MainPage /> */}
      {/* <ProductPage /> */}
      {/* <Navbar /> */}
      {/* <MostSelling /> */}
      {/* <AllProductsPage/> */}
    </>
  );
}

export default App;
