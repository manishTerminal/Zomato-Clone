import zetomart from "../assets/zetomart-logo.png";
import "../styles/navbar.css";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
