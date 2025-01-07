import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItemsCount }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Digital Mantraaz E-Shop</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-link" aria-label="View Cart">
            View Cart ({cartItemsCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
