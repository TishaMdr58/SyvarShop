import React, { useState, useEffect } from "react";
import "./MainPage.css";
import axios from "axios";
import ProductBox from "./ProductBox";
import MostSelling from "./MostSelling";
import bg from "../public/nobg.png";
function MainPage({ setCartCount, count }) {
  // const [data, setData] = useState([]);
  // const [cart, setcart] = usestate(0);
  // const [firstPage, setFirstPage] = useState([]);
  // const [cart, setCart] = useState([]);

  // function handleCart(id) {
  //   setCart((prev) => [...prev, id]);
  //   setCartCount(count + 1);
  // }

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  // useEffect(() => {
  //   axios
  //     .get(`https://fakestoreapi.com/products`)
  //     .then((res) => {
  //       console.log(res.data);
  //       // setData(res.data);
  //       setFirstPage(res.data.slice(0, 3));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <div className="main-shop">
        <div className="main-display">
          <img src={bg} alt="" />
          <p>GET DRESSED AS YOUNG</p>
        </div>
        <MostSelling setCartCount={setCartCount} count={count} />
        <div className="displayedImage">
          <img className="imageDis" src="../public/uns.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default MainPage;
