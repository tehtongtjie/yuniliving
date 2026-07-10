import React from 'react';
import { Wifi, Trees, Coffee, MapPin, ShieldCheck, Zap } from 'lucide-react';
import styles from './Fasilitas.module.css';

function Fasilitas() {
  const fasilitas = [
    { icon: <Wifi size={28} />, name: "High-Speed Wi-Fi" },
    { icon: <Trees size={28} />, name: "Private Area" },
    { icon: <Coffee size={28} />, name: "Full Amenities" },
    { icon: <MapPin size={28} />, name: "Strategis" },
    { icon: <ShieldCheck size={28} />, name: "24/7 Keamanan" },
    { icon: <Zap size={28} />, name: "Listrik Stabil" }
  ];

  return (
    <section id="fasilitas" className={styles.sectionContainer}>
      <div className={styles.textCenter}>
        <h3 className={styles.sectionTitle}>Kenapa Memilih Yuni Living?</h3>
        <p style={{ color: '#64748b' }}>Standar layanan yang kami berikan untuk setiap properti</p>
      </div>
      
      <div className={styles.gridFourCols}>
        {fasilitas.map((item, index) => (
          <div key={index} className={styles.facilityCard}>
            <div className={styles.iconBox}>{item.icon}</div>
            <span className={styles.facilityName}>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Fasilitas;