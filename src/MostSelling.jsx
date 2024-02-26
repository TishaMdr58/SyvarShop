import React, { useEffect, useState } from "react";
import "./MostSelling.css";
import axios from "axios";
import ProductBox from "./ProductBox";

function MostSelling({ setCartCount, count }) {
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
        // setData(res.data);
        setFirstPage(res.data.slice(0, 3));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="most-selling">
        <div className="heading">Most Selling</div>

        <div className="columnContainer">
          {firstPage.map((value, index) => (
            <>
              <div className="mostSellingProductBox">
                <ProductBox
                  value={value}
                  index={index}
                  handleCart={handleCart}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default MostSelling;
