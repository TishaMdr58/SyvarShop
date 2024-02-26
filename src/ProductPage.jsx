import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import MostSelling from "./MostSelling";
import { useLocation } from "react-router-dom";

function ProductPage({ setCartCount, count }) {
  const [firstPage, setFirstPage] = useState([]);
  const [cart, setCart] = useState([]);

  const location = useLocation();
  const { from } = location.state;
  console.log(from);

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
        // setData(res.data);
        setFirstPage(res.data.slice(0, 1));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="boxBg">
        {/* {firstPage.map((value, index) => ( */}
        <div className="mid-box">
          <div className="pic">
            <img src={from.image} alt="" />
          </div>
          <div className="productDetails">
            <div className="name">{from.title}</div>
            <div className="price">${from.price}</div>
            <div className="desc">{from.description}</div>
            <div className="btn1">Buy Now</div>
            <div className="btn2" onClick={() => handleCart(from.id)}>
              Add To Cart
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>

      <MostSelling setCartCount={setCartCount} count={count}  />
    </>
  );
}

export default ProductPage;
