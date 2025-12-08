import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Bar.module.css";
import logo from "./assets/HOM/logo.png";

function Bar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.logoBox}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <h1 className={styles.title}>COZY CORNER</h1>

        <div className={styles.rightSection}>
          {/* Search Icon */}
          <i
            className="bi bi-search"
            onClick={() => setShowSearch(!showSearch)}
            style={{ cursor: "pointer", color: "#E1D4C2", fontSize: "1.3rem" }}
          ></i>

          {showSearch && (
            <div className={styles.searchBox}>
              <input type="text" placeholder="Search..." autoFocus />
            </div>
          )}

          {/* Social Icons */}
          <div className={styles.icons}>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
          </div>

          {/* Cart */}
          <button className={styles.cartBtn}>
            <i className="bi bi-bag"></i>
          </button>

          {/* Login/Register */}
          <div className={styles.authLinks}>
            <Link to="/login" className={styles.authLink}>Login</Link>
            <span className={styles.divider}>|</span>
            <Link to="/register" className={styles.authLink}>Register</Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.navBar}>
        <Link to="/">Home</Link>
        <Link to="/landing">About</Link>

        {/* Categories Dropdown */}
        <div className={styles.dropdown}>
          <span>Categories</span>
          <div className={styles.dropdownContent}>
            <Link to="/candles">Candles</Link>
            <Link to="/mirrors">Mirrors</Link>
            <Link to="/vases">Vases</Link>
            <Link to="/frames">Frames</Link>
          </div>
        </div>

        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Bar;
