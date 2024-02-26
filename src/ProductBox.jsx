import React from "react";
import { Link } from "react-router-dom";
import "./ProductBox.css";

function ProductBox({ value, index, handleCart }) {
  return (
    <>
      <div className="products" key={index}>
        <img src={value.image} alt="" />
        <div className="details">
          <div className="title">{value.title}</div>
          <div className="rating"></div>
          <div className="size">
            <div className="sizes">sm</div>
            <div className="sizes">lg</div>
            <div className="sizes">xl</div>
          </div>
          <div className="price">${value.price}</div>
          <Link to="/buy" state={{ from: value }}>
            <div className="btn1">Buy Now</div>
          </Link>
          <div className="btn2" onClick={() => handleCart(value.id)}>
            Add To Cart
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBox;
