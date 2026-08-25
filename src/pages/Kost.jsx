import React from "react";
import styles from "./Kost.module.css";
import { MapPin, Star, Heart, BedDouble, Wifi, Wind } from "lucide-react";

const kosts = [
  {
    id: 1,
    title: "Kost Putri Canggu",
    location: "Canggu, Bali",
    price: "Rp 2.5jt",
    period: "/ bulan",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
    badge: "Putri",
    type: "AC + WiFi",
    facilities: ["AC", "WiFi", "Kamar Mandi Dalam"],
  },
  {
    id: 2,
    title: "Kost Exclusive Seminyak",
    location: "Seminyak, Bali",
    price: "Rp 3.2jt",
    period: "/ bulan",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    badge: "Campur",
    type: "Full Furnished",
    facilities: ["AC", "WiFi", "Parkir"],
  },
  {
    id: 3,
    title: "Kost Modern Denpasar",
    location: "Denpasar, Bali",
    price: "Rp 1.8jt",
    period: "/ bulan",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    badge: "Putra",
    type: "Kamar Mandi Dalam",
    facilities: ["WiFi", "Dapur", "Laundry"],
  },
  {
    id: 4,
    title: "Kost Premium Ubud",
    location: "Ubud, Bali",
    price: "Rp 2.8jt",
    period: "/ bulan",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    badge: "Campur",
    type: "Private Bathroom",
    facilities: ["AC", "WiFi", "Kolam"],
  },
];

function Kost() {
  return (
    <section className={styles.section} id="kost">
      {/* Heading */}
      <div className={styles.heading}>
        <span>Koleksi Kost</span>
        <h2>Kost Nyaman & Strategis</h2>
        <p>
          Temukan kost bersih, aman, dan dekat dengan pusat kota atau area
          wisata. Cocok untuk mahasiswa, pekerja, dan long-stay.
        </p>
      </div>

      {/* Filter */}
      <div className={styles.filters}>
        <button className={`${styles.filterBtn} ${styles.active}`}>Semua</button>
        <button className={styles.filterBtn}>Putri</button>
        <button className={styles.filterBtn}>Putra</button>
        <button className={styles.filterBtn}>Campur</button>
        <button className={styles.filterBtn}>AC</button>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {kosts.map((item) => (
          <article key={item.id} className={styles.card}>
            <div className={styles.image}>
              <img src={item.image} alt={item.title} />
              <span className={styles.badge}>{item.badge}</span>
              <button className={styles.favorite} aria-label="Favorite">
                <Heart size={18} />
              </button>
            </div>

            <div className={styles.body}>
              <div className={styles.rating}>
                <Star size={15} fill="currentColor" />
                <span>{item.rating}</span>
              </div>

              <h3>{item.title}</h3>

              <div className={styles.location}>
                <MapPin size={15} />
                <span>{item.location}</span>
              </div>

              <div className={styles.meta}>
                <div>
                  <BedDouble size={15} />
                  <span>{item.type}</span>
                </div>
              </div>

              <div className={styles.facilities}>
                {item.facilities.map((fas, i) => (
                  <span key={i} className={styles.tag}>
                    {fas}
                  </span>
                ))}
              </div>

              <div className={styles.footer}>
                <div>
                  <small>Mulai dari</small>
                  <h4>
                    {item.price}
                    <span>{item.period}</span>
                  </h4>
                </div>
                <button className={styles.button}>Lihat Detail</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Kost;