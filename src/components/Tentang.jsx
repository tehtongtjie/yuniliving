import React from "react";
import { Home, ShieldCheck, MapPin } from "lucide-react";
import styles from "./Tentang.module.css";

function Tentang() {
  return (
    <section id="tentang" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
            alt="Yuni Living Property"
          />
        </div>

        <div className={styles.content}>

          <span className={styles.badge}>
            Tentang Yuni Living
          </span>

          <h2>
            Menghadirkan Hunian Nyaman,
            <span> Modern, dan Berkualitas.</span>
          </h2>

          <p>
            Yuni Living menyediakan berbagai pilihan villa, apartemen,
            dan kost premium dengan lokasi strategis, fasilitas lengkap,
            serta pelayanan profesional untuk memberikan pengalaman
            tinggal yang aman, nyaman, dan berkesan.
          </p>

          <div className={styles.features}>

            <div className={styles.feature}>
              <Home size={22}/>
              <div>
                <h4>Properti Berkualitas</h4>
                <span>Villa, apartemen, dan kost pilihan.</span>
              </div>
            </div>

            <div className={styles.feature}>
              <MapPin size={22}/>
              <div>
                <h4>Lokasi Strategis</h4>
                <span>Dekat pusat aktivitas dan fasilitas umum.</span>
              </div>
            </div>

            <div className={styles.feature}>
              <ShieldCheck size={22}/>
              <div>
                <h4>Pelayanan Terpercaya</h4>
                <span>Kepuasan pelanggan menjadi prioritas utama.</span>
              </div>
            </div>

          </div>

          <div className={styles.stats}>

            <div>
              <h3>10+</h3>
              <span>Properti</span>
            </div>

            <div>
              <h3>500+</h3>
              <span>Pelanggan</span>
            </div>

            <div>
              <h3>2020</h3>
              <span>Berdiri</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Tentang;