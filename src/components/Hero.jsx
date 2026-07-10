import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroContent}>
        <h2>Temukan Hunian Impian Anda di Yuni Living</h2>
        <p>Pilihan eksklusif villa, apartemen, dan kost terbaik dengan kenyamanan nomor satu.</p>
        <a href="#properti" className={styles.btnCta}>
          Lihat Katalog Properti
        </a>
      </div>
    </header>
  );
}

export default Hero;