import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
    setDropOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goTo = (id) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 300);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <div className="navbar">

      {/* LOGO + BRAND */}
      <div className="nav-left">
        <Link to="/" onClick={closeMenu}>
          <img src="/image/jgt logo.jpg" alt="Logo" className="nav-logo" />
        </Link>
        <div className="brand animated-brand">Jay Ganesh Tours & Travels</div>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar bar1-open" : "bar"}></div>
        <div className={menuOpen ? "bar bar2-open" : "bar"}></div>
        <div className={menuOpen ? "bar bar3-open" : "bar"}></div>
      </div>

      {/* NAV LINKS */}
      <div className={menuOpen ? "nav-links nav-show" : "nav-links"}>

        {/* MAIN BUTTONS */}
        <a className="basic-link" onClick={() => goTo("hero")}>Home</a>
        <a className="basic-link" onClick={() => goTo("daily")}>Daily Routes</a>
        <a className="basic-link" onClick={() => goTo("contact")}>Contact</a>
        <a className="basic-link" onClick={() => goTo("vehicles")}>Vehicles</a>

        {/* DROPDOWN */}
        <div className="dropdown" onClick={() => setDropOpen(!dropOpen)}>
          <span className="drop-btn">
            More <span className={dropOpen ? "arrow rotate" : "arrow"}>▼</span>
          </span>

          <div className={dropOpen ? "dropdown-content drop-show" : "dropdown-content"}>
            <button className="drop-link" onClick={() => goTo("services")}>Services</button>
            <button className="drop-link" onClick={() => goTo("packages")}>Packages</button>
            <button className="drop-link" onClick={() => goTo("specialities")}>Specialities</button>
            <button className="drop-link" onClick={() => goTo("qr")}>QR Section</button>
            <button className="drop-link" onClick={() => goTo("whyus")}>Why Us</button>
            <button className="drop-link" onClick={() => goTo("topplaces")}>Top Places</button>
            <button className="drop-link" onClick={() => goTo("faq")}>FAQ</button>
            <Link to="/terms" onClick={closeMenu}>Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
