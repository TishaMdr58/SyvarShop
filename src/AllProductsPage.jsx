import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllProductsPage.css";
import "./MostSelling.css";
import ProductBox from "./ProductBox";

function AllProductsPage({ setCartCount, count }) {
  const [firstPage, setFirstPage] = useState([]);
  const [cart, setCart] = useState([]);

  function handleCart(id) {
    setCart((prev) => [...prev, id]);
    setCartCount(count + 1);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        console.log(res.data);
        setFirstPage(res.data.slice(0, 14));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="bar">
        <div className="sortBar">
          <div className="alphabetText">Sort by Alphabetically, A-Z</div>
        </div>
      </div>

      {/* ----------Displayed Products------------------- */}

      <div className="productPart">
        {firstPage.map((value, index) => (
          <>
            <ProductBox value={value} index={index} handleCart={handleCart} />
          </>
        ))}
      </div>
    </>
  );
}

export default AllProductsPage;
