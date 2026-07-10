import React from "react";
import {
  Wifi,
  Trees,
  Coffee,
  MapPin,
  ShieldCheck,
  Zap,
} from "lucide-react";

import styles from "./Fasilitas.module.css";

function Fasilitas() {
  const fasilitas = [
    {
      icon: <Wifi size={30} />,
      title: "High-Speed Wi-Fi",
      desc: "Internet cepat dan stabil untuk bekerja maupun hiburan.",
    },
    {
      icon: <Trees size={30} />,
      title: "Lingkungan Asri",
      desc: "Suasana tenang dengan area hijau yang nyaman.",
    },
    {
      icon: <Coffee size={30} />,
      title: "Fasilitas Lengkap",
      desc: "Perabot modern dan kebutuhan harian tersedia.",
    },
    {
      icon: <MapPin size={30} />,
      title: "Lokasi Strategis",
      desc: "Dekat pusat kota, kampus, dan area wisata.",
    },
    {
      icon: <ShieldCheck size={30} />,
      title: "Keamanan 24 Jam",
      desc: "Area aman dengan sistem keamanan yang terjaga.",
    },
    {
      icon: <Zap size={30} />,
      title: "Listrik Stabil",
      desc: "Pasokan listrik yang andal untuk aktivitas sehari-hari.",
    },
  ];

  return (
    <section id="fasilitas" className={styles.section}>

      <div className={styles.heading}>
        <span>Fasilitas Unggulan</span>

        <h2>Semua yang Anda Butuhkan Ada di Sini</h2>

        <p>
          Setiap properti Yuni Living dirancang untuk memberikan
          kenyamanan, keamanan, dan pengalaman tinggal terbaik.
        </p>
      </div>

      <div className={styles.grid}>
        {fasilitas.map((item, index) => (
          <div className={styles.card} key={index}>

            <div className={styles.icon}>
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Fasilitas;