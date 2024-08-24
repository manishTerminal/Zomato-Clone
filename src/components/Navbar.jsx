import { useState } from "react";
import zetomart from "../assets/zetomart-logo.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const items = useSelector((state) => state.cart.items);

  console.log(items);

  return (
    <div className="navbar flex justify-between shadow-md py-4 fixed bg-white min-w-full ">
      <div className="mx-4">
        <Link to="/">
          <img className="w-28 " src={zetomart} alt="logo" />
        </Link>
      </div>
      <div className="auth flex justify-center items-center ">
        <ul className="nav-items flex justify-center font-semibold text-lg">
          {/* <Link to="/profile">
            <li className="mx-2">Profile</li>
          </Link> */}
          {/* <Link to="/offer">
            <li className="mx-2">Offer</li>
          </Link> */}
          {/* <Link to="/help">
            <li className="mx-2">Help</li>
          </Link> */}
          <Link to="/cart">
            <li className="mx-2">Cart - {items.length} items</li>
          </Link>
        </ul>

        {isLoggedIn ? (
          <button
            className="mx-16 bg-red-600 text-white px-4 py-2"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Log In
          </button>
        ) : (
          <button
            className="mx-16 bg-red-600 text-white px-4 py-2"
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
