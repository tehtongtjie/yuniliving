import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoPrimary}>YUNI</span>
        <span className={styles.logoAccent}>LIVING</span>
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <a href="#tentang" onClick={closeMenu}>
          Tentang
        </a>

        <a href="#villa" onClick={closeMenu}>
          Villa
        </a>

        <a href="#apartemen" onClick={closeMenu}>
          Apartemen
        </a>

        <a href="#kost" onClick={closeMenu}>
          Kost
        </a>

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