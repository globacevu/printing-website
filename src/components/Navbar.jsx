import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link className="logo" to="/">
          PrintPro
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={open ? "nav-links active" : "nav-links"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/publications">Publications</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/quote" className="quote-btn">
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}