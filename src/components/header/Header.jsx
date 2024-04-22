import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h3>
            Dr <span>PRO</span>
          </h3>
          <p>Plastic Surgery</p>
        </div>
        <div className="nav-items">
          <i className="nav-close-btn fa-solid fa-xmark" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav-buttons">
          <div className="social-handle">
            <span>
              <i className="fa-brands fa-instagram" />
            </span>
            <span>
              <i className="fa-brands fa-facebook-f" />
            </span>
            <span>
              <i className="fa-brands fa-twitter" />
            </span>
          </div>
        </div>
        <div className="hamburger-menu">
          <i className="fa-solid fa-bars" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
