import { useState } from "react";
import zetomart from "../assets/zetomart-logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="navbar">
      <div>
        <a href="/">
          <img src={zetomart} alt="logo" />
        </a>
      </div>
      <ul className="nav-items">
        <li>Search</li>
        <li>Offer</li>
        <li>Help</li>
        <li>Cart</li>
      </ul>
      {(isLoggedIn) ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          LogIn
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          LogOut
        </button>
      )}
    </div>
  );
};

export default Navbar;
