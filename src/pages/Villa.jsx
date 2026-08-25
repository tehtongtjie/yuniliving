import React from "react";
import styles from "./Villa.module.css";
import { Link } from "react-router-dom";
import { MapPin, Star, Heart, BedDouble, Bath, Maximize } from "lucide-react";

const villas = [
  {
    id: 1,
    title: "Villa Ocean View",
    location: "Canggu, Bali",
    price: "Rp 3.5jt",
    period: "/ malam",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    badge: "Populer",
    beds: 3,
    baths: 2,
    size: "180 m²",
  },
  {
    id: 2,
    title: "Villa Tropical Escape",
    location: "Ubud, Bali",
    price: "Rp 2.8jt",
    period: "/ malam",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    badge: "Best Value",
    beds: 2,
    baths: 2,
    size: "140 m²",
  },
  {
    id: 3,
    title: "Villa Sunset Cliff",
    location: "Uluwatu, Bali",
    price: "Rp 4.2jt",
    period: "/ malam",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    badge: "Luxury",
    beds: 4,
    baths: 3,
    size: "250 m²",
  },
  {
    id: 4,
    title: "Villa Private Pool",
    location: "Seminyak, Bali",
    price: "Rp 3.1jt",
    period: "/ malam",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    badge: "Baru",
    beds: 3,
    baths: 2,
    size: "160 m²",
  },
];

function Villa() {
  return (
    <section className={styles.section} id="villa">
      {/* Heading */}
      <div className={styles.heading}>
        <span>Koleksi Villa</span>
        <h2>Temukan Villa Impian Anda</h2>
        <p>
          Pilihan villa eksklusif dengan desain modern, private pool, dan lokasi
          strategis di seluruh Bali.
        </p>
      </div>

      {/* Filter (opsional) */}
      <div className={styles.filters}>
        <button className={`${styles.filterBtn} ${styles.active}`}>Semua</button>
        <button className={styles.filterBtn}>Canggu</button>
        <button className={styles.filterBtn}>Ubud</button>
        <button className={styles.filterBtn}>Uluwatu</button>
        <button className={styles.filterBtn}>Seminyak</button>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {villas.map((villa) => (
          <article key={villa.id} className={styles.card}>
            <div className={styles.image}>
              <img src={villa.image} alt={villa.title} />
              <span className={styles.badge}>{villa.badge}</span>
              <button className={styles.favorite} aria-label="Favorite">
                <Heart size={18} />
              </button>
            </div>

            <div className={styles.body}>
              <div className={styles.rating}>
                <Star size={15} fill="currentColor" />
                <span>{villa.rating}</span>
              </div>

              <h3>{villa.title}</h3>

              <div className={styles.location}>
                <MapPin size={15} />
                <span>{villa.location}</span>
              </div>

              <div className={styles.meta}>
                <div>
                  <BedDouble size={15} />
                  <span>{villa.beds} KT</span>
                </div>
                <div>
                  <Bath size={15} />
                  <span>{villa.baths} KM</span>
                </div>
                <div>
                  <Maximize size={15} />
                  <span>{villa.size}</span>
                </div>
              </div>
<div className={styles.footer}>
  <div>
    <small>Mulai dari</small>
    <h4>
      {villa.price}
      <span>{villa.period}</span>
    </h4>
  </div>

  <Link to={`/villa/${villa.id}`} className={styles.button}>
    Lihat Detail
  </Link>
</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Villa;