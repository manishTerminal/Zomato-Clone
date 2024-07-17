import { useState } from "react";
import zetomart from "../assets/zetomart-logo.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const items = useSelector((state) => state.cart.items);
  
 console.log(items)

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img src={zetomart} alt="logo" />
        </Link>
      </div>
      <div className="auth">
        <ul className="nav-items">
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <Link to="/offer">
            <li>Offer</li>
          </Link>
          <Link to="/help">
            <li>Help</li>
          </Link>
          <Link to="/cart">
            <li>Cart - {items.length} items</li>
          </Link>
        </ul>

        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Log In
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
