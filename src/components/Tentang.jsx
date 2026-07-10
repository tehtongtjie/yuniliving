import React from 'react';
import styles from './Tentang.module.css';

function Tentang() {
  return (
    <section id="tentang" className={styles.sectionContainer}>
      <div className={styles.gridTwoCols}>
        <div>
          <span className={styles.labelSub}>Tentang Yuni Living</span>
          <h3 className={styles.sectionTitle}>Hunian Berkualitas, Kenyamanan Utama</h3>
          <p className={styles.description}>
            Yuniar Living hadir sebagai solusi hunian terpercaya dengan portofolio beragam mulai dari Villa eksklusif, Apartemen strategis, hingga Kost yang nyaman. Kami berkomitmen memberikan pengalaman menginap dan tempat tinggal dengan standar kenyamanan terbaik.
          </p>
          
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* Bisa tambahkan badge atau poin keunggulan di sini */}
            <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '10px' }}>
              <strong>10+</strong> Properti Tersebar
            </div>
            <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '10px' }}>
              <strong>Terpercaya</strong> Sejak 2020
            </div>
          </div>
        </div>

        <div className={styles.imgWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" 
            alt="Yuniar Living Property" 
          />
        </div>
      </div>
    </section>
  );
}

export default Tentang;