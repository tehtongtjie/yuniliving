import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer id="kontak" className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Kolom 1: Brand */}
        <div className={styles.brandDesc}>
          <h4>Yuni LIVING</h4>
          <p>
            Menyediakan hunian eksklusif, mulai dari villa mewah, apartemen strategis, hingga kost nyaman di Lombok. 
            Prioritas kami adalah kenyamanan Anda.
          </p>
        </div>

        {/* Kolom 2: Quick Links */}
        <div className={styles.footerLinks}>
          <h5>Navigasi</h5>
          <ul>
            <li><a href="#tentang">Tentang Kami</a></li>
            <li><a href="#villa">Villa</a></li>
            <li><a href="#apartemen">Apartemen</a></li>
            <li><a href="#kost">Kost</a></li>
          </ul>
        </div>

        {/* Kolom 3: Kontak */}
        <div className={styles.footerLinks}>
          <h5>Kontak</h5>
          <p>Jl. Raya Utama No. 123, Mataram</p>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
            WhatsApp: 0812-3456-7890
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Yuniar Living. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;