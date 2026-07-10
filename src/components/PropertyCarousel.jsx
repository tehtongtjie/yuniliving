import React from 'react';
import styles from './PropertyCarousel.module.css';

function PropertyCarousel() {
  const propertiTerbaik = [
    { nama: "Villa Rinjani Luxury", tipe: "Villa", harga: "Rp 2.5jt/malam", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=500&q=80" },
    { nama: "Apartemen Mataram Suite", tipe: "Apartemen", harga: "Rp 6jt/bulan", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=500&q=80" },
    { nama: "Kost Exclusive Yuniar", tipe: "Kost", harga: "Rp 1.5jt/bulan", img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=500&q=80" },
    { nama: "Villa Senaru View", tipe: "Villa", harga: "Rp 1.8jt/malam", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=500&q=80" }
  ];

  return (
    <section className={styles.sectionContainer}>
      <h3 className={styles.sectionTitle}>Pilihan Properti Terbaik</h3>
      <div className={styles.carousel}>
        {propertiTerbaik.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.img} alt={item.nama} className={styles.cardImg} />
            <div className={styles.cardBody}>
              <span className={styles.tag}>{item.tipe}</span>
              <h4 className={styles.title}>{item.nama}</h4>
              <span className={styles.price}>{item.harga}</span>
              <button style={{ width: '100%', padding: '10px', background: '#047857', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PropertyCarousel;