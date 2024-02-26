import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar(props) {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function toggleMenu() {
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <>
      <nav>
        <div className="hamburgerMenu" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
        {isMenuClicked ? (
          <div className="burger">
            <ul>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/allProduct">
                <li>Shop</li>
              </NavLink>
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>
        ) : (
          <></>
        )}

        <ul className="navitems">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/allProduct">
            <li>Shop</li>
          </NavLink>
          <li>About</li>
          <li>Contact us</li>
          <div className="cartIcon">
            <svg
              className="cart"
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="46"
              viewBox="0 0 45 46"
              fill="none"
            >
              <path
                d="M36 36.5C37.1935 36.5 38.3381 36.9741 39.182 37.818C40.0259 38.6619 40.5 39.8065 40.5 41C40.5 42.1935 40.0259 43.3381 39.182 44.182C38.3381 45.0259 37.1935 45.5 36 45.5C34.8065 45.5 33.6619 45.0259 32.818 44.182C31.9741 43.3381 31.5 42.1935 31.5 41C31.5 38.5025 33.5025 36.5 36 36.5ZM0 0.5H7.3575L9.4725 5H42.75C43.3467 5 43.919 5.23705 44.341 5.65901C44.7629 6.08097 45 6.65326 45 7.25C45 7.6325 44.8875 8.015 44.73 8.375L36.675 22.9325C35.91 24.305 34.425 25.25 32.7375 25.25H15.975L13.95 28.9175L13.8825 29.1875C13.8825 29.3367 13.9418 29.4798 14.0473 29.5852C14.1527 29.6907 14.2958 29.75 14.445 29.75H40.5V34.25H13.5C12.3065 34.25 11.1619 33.7759 10.318 32.932C9.47411 32.0881 9 30.9435 9 29.75C9 28.9625 9.2025 28.22 9.54 27.59L12.6 22.0775L4.5 5H0V0.5ZM13.5 36.5C14.6935 36.5 15.8381 36.9741 16.682 37.818C17.5259 38.6619 18 39.8065 18 41C18 42.1935 17.5259 43.3381 16.682 44.182C15.8381 45.0259 14.6935 45.5 13.5 45.5C12.3065 45.5 11.1619 45.0259 10.318 44.182C9.47411 43.3381 9 42.1935 9 41C9 38.5025 11.0025 36.5 13.5 36.5ZM33.75 20.75L40.005 9.5H11.565L16.875 20.75H33.75Z"
                fill="black"
              />
            </svg>
            <div className="cartNumber">
              <h1> {props.cart}</h1>
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
