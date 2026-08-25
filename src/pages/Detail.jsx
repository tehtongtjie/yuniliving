import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Detail.module.css";
import {
  MapPin,
  Star,
  Heart,
  BedDouble,
  Bath,
  Maximize,
  Wifi,
  Wind,
  Car,
  Waves,
  ArrowLeft,
  Share2,
} from "lucide-react";

// Data dummy (nanti bisa diganti dari API / state)
const properties = {
  villa: {
    1: {
      title: "Villa Ocean View",
      location: "Canggu, Bali",
      price: "Rp 3.5jt",
      period: "/ malam",
      rating: 4.9,
      reviews: 128,
      type: "Villa",
      beds: 3,
      baths: 2,
      size: "180 m²",
      description:
        "Villa mewah dengan pemandangan laut yang menakjubkan. Dilengkapi private pool, kitchen modern, dan desain interior tropis kontemporer. Cocok untuk liburan keluarga maupun pasangan.",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      ],
      facilities: [
        { icon: <Wifi size={18} />, name: "WiFi Cepat" },
        { icon: <Wind size={18} />, name: "AC" },
        { icon: <Car size={18} />, name: "Parkir" },
        { icon: <Waves size={18} />, name: "Private Pool" },
        { icon: <BedDouble size={18} />, name: "3 Kamar Tidur" },
        { icon: <Bath size={18} />, name: "2 Kamar Mandi" },
      ],
    },
  },
  apartemen: {
    1: {
      title: "Sky Residence Seminyak",
      location: "Seminyak, Bali",
      price: "Rp 1.8jt",
      period: "/ malam",
      rating: 4.8,
      reviews: 86,
      type: "Apartemen",
      beds: 2,
      baths: 1,
      size: "75 m²",
      description:
        "Apartemen modern di jantung Seminyak. Akses mudah ke pantai, restoran, dan nightlife. Fully furnished dengan interior stylish dan pemandangan kota.",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      ],
      facilities: [
        { icon: <Wifi size={18} />, name: "WiFi" },
        { icon: <Wind size={18} />, name: "AC" },
        { icon: <Car size={18} />, name: "Parkir" },
        { icon: <BedDouble size={18} />, name: "2 Kamar Tidur" },
        { icon: <Bath size={18} />, name: "1 Kamar Mandi" },
      ],
    },
  },
  kost: {
    1: {
      title: "Kost Putri Canggu",
      location: "Canggu, Bali",
      price: "Rp 2.5jt",
      period: "/ bulan",
      rating: 4.8,
      reviews: 42,
      type: "Kost",
      beds: 1,
      baths: 1,
      size: "24 m²",
      description:
        "Kost putri nyaman dan aman di area Canggu. Kamar bersih, AC, WiFi kencang, dan kamar mandi dalam. Dekat dengan cafe dan beach club.",
      images: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
      ],
      facilities: [
        { icon: <Wifi size={18} />, name: "WiFi" },
        { icon: <Wind size={18} />, name: "AC" },
        { icon: <Bath size={18} />, name: "Kamar Mandi Dalam" },
      ],
    },
  },
};

function Detail() {
  const { type, id } = useParams();

  // Ambil data (fallback ke villa 1 jika tidak ketemu)
  const data =
    properties[type]?.[id] ||
    properties.villa[1];

  return (
    <section className={styles.section}>
      {/* Back Button */}
      <div className={styles.topBar}>
        <Link to={`/${type || "villa"}`} className={styles.backBtn}>
          <ArrowLeft size={18} />
          <span>Kembali</span>
        </Link>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Share">
            <Share2 size={18} />
          </button>
          <button className={styles.iconBtn} aria-label="Favorite">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* Gallery */}
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          <img src={data.images[0]} alt={data.title} />
        </div>
        <div className={styles.sideImages}>
          {data.images.slice(1, 4).map((img, i) => (
            <div key={i} className={styles.sideImage}>
              <img src={img} alt={`${data.title} ${i + 2}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Left */}
        <div className={styles.left}>
          <div className={styles.badge}>{data.type}</div>

          <h1>{data.title}</h1>

          <div className={styles.metaRow}>
            <div className={styles.location}>
              <MapPin size={16} />
              <span>{data.location}</span>
            </div>
            <div className={styles.rating}>
              <Star size={15} fill="currentColor" />
              <span>
                {data.rating} · {data.reviews} ulasan
              </span>
            </div>
          </div>

          <div className={styles.specs}>
            <div>
              <BedDouble size={18} />
              <span>{data.beds} Kamar Tidur</span>
            </div>
            <div>
              <Bath size={18} />
              <span>{data.baths} Kamar Mandi</span>
            </div>
            <div>
              <Maximize size={18} />
              <span>{data.size}</span>
            </div>
          </div>

          <div className={styles.divider} />

          <h3>Deskripsi</h3>
          <p className={styles.description}>{data.description}</p>

          <div className={styles.divider} />

          <h3>Fasilitas</h3>
          <div className={styles.facilities}>
            {data.facilities.map((item, i) => (
              <div key={i} className={styles.facility}>
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right – Booking Card */}
        <div className={styles.right}>
          <div className={styles.bookingCard}>
            <div className={styles.price}>
              <h2>
                {data.price}
                <span>{data.period}</span>
              </h2>
            </div>

            <div className={styles.bookingInfo}>
              <div>
                <small>Tipe</small>
                <strong>{data.type}</strong>
              </div>
              <div>
                <small>Lokasi</small>
                <strong>{data.location}</strong>
              </div>
            </div>

            <a
              href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${data.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              Hubungi via WhatsApp
            </a>

            <p className={styles.note}>
              Respon cepat · Gratis konsultasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;