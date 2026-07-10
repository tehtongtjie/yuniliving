import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        YUNI <span className={styles.logoAccent}>LIVING</span>
      </div>

      {/* Tombol Hamburger (Hanya muncul di HP) */}
      <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Daftar Menu */}
      <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        <a href="#tentang" className={styles.navItem} onClick={() => setIsOpen(false)}>Tentang</a>
        <a href="#villa" className={styles.navItem} onClick={() => setIsOpen(false)}>Villa</a>
        <a href="#apartemen" className={styles.navItem} onClick={() => setIsOpen(false)}>Apartemen</a>
        <a href="#kost" className={styles.navItem} onClick={() => setIsOpen(false)}>Kost</a>
        <a href="#kontak" className={styles.btnCta} onClick={() => setIsOpen(false)}>Hubungi Kami</a>
      </div>
    </nav>
  );
}

export default Navbar;