import { Link } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">LOGO</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/">Order Online</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;