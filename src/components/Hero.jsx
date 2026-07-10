import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="beranda">
      <div className={styles.overlay}></div>

      <div className={styles.heroContent}>
        <span className={styles.badge}>
          ✨ Premium Property in Lombok
        </span>

        <h1>
          Temukan Hunian
          <span> Nyaman & Elegan </span>
          Bersama Yuni Living
        </h1>

        <p>
          Kami menghadirkan pilihan villa, apartemen, dan kost eksklusif
          dengan lokasi strategis, fasilitas terbaik, serta pelayanan
          profesional untuk memenuhi kebutuhan tempat tinggal Anda.
        </p>

        <div className={styles.heroButtons}>
          <a href="#properti" className={styles.btnPrimary}>
            Jelajahi Properti
          </a>

          <a href="#kontak" className={styles.btnSecondary}>
            Konsultasi Gratis
          </a>
        </div>

        <div className={styles.heroStats}>
          <div>
            <h3>150+</h3>
            <span>Properti</span>
          </div>

          <div>
            <h3>500+</h3>
            <span>Pelanggan</span>
          </div>

          <div>
            <h3>4.9★</h3>
            <span>Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;