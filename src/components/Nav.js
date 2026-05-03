import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav aria-label="Main navigation">
      <div className="nav-container">
        <div className="logo">
          <img alt="littl-lemon-logo" src="../images/logo .svg"/>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;