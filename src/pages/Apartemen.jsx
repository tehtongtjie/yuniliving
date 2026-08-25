import React from "react";
import styles from "./Apartemen.module.css";
import { MapPin, Star, Heart, BedDouble, Bath, Maximize } from "lucide-react";

const apartments = [
  {
    id: 1,
    title: "Sky Residence Seminyak",
    location: "Seminyak, Bali",
    price: "Rp 1.8jt",
    period: "/ malam",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    badge: "Populer",
    beds: 2,
    baths: 1,
    size: "75 m²",
  },
  {
    id: 2,
    title: "Urban Loft Canggu",
    location: "Canggu, Bali",
    price: "Rp 1.5jt",
    period: "/ malam",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    badge: "Best Value",
    beds: 1,
    baths: 1,
    size: "55 m²",
  },
  {
    id: 3,
    title: "Horizon Apartment",
    location: "Kuta, Bali",
    price: "Rp 2.2jt",
    period: "/ malam",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    badge: "Luxury",
    beds: 3,
    baths: 2,
    size: "110 m²",
  },
  {
    id: 4,
    title: "Modern Studio Denpasar",
    location: "Denpasar, Bali",
    price: "Rp 950rb",
    period: "/ malam",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    badge: "Baru",
    beds: 1,
    baths: 1,
    size: "42 m²",
  },
];

function Apartemen() {
  return (
    <section className={styles.section} id="apartemen">
      {/* Heading */}
      <div className={styles.heading}>
        <span>Koleksi Apartemen</span>
        <h2>Apartemen Modern & Nyaman</h2>
        <p>
          Pilihan apartemen strategis dengan fasilitas lengkap, cocok untuk
          tinggal jangka pendek maupun panjang di Bali.
        </p>
      </div>

      {/* Filter */}
      <div className={styles.filters}>
        <button className={`${styles.filterBtn} ${styles.active}`}>Semua</button>
        <button className={styles.filterBtn}>Seminyak</button>
        <button className={styles.filterBtn}>Canggu</button>
        <button className={styles.filterBtn}>Kuta</button>
        <button className={styles.filterBtn}>Denpasar</button>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {apartments.map((item) => (
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
                  <span>{item.beds} KT</span>
                </div>
                <div>
                  <Bath size={15} />
                  <span>{item.baths} KM</span>
                </div>
                <div>
                  <Maximize size={15} />
                  <span>{item.size}</span>
                </div>
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

export default Apartemen;