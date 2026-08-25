import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" onClick={closeMenu} style={{ textDecoration: "none" }}>
          <span className={styles.logoPrimary}>YUNI</span>
          <span className={styles.logoAccent}>LIVING</span>
        </Link>
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Tentang
        </Link>

        <Link to="/villa" onClick={closeMenu}>
          Villa
        </Link>

        <Link to="/apartemen" onClick={closeMenu}>
          Apartemen
        </Link>

        <Link to="/kost" onClick={closeMenu}>
          Kost
        </Link>

        <a
          href="#kontak"
          className={styles.ctaButton}
          onClick={closeMenu}
        >
          Hubungi Kami
        </a>
      </nav>
    </header>
  );
}

export default Navbar;