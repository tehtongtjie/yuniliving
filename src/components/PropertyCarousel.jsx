import React from "react";
import {
  Heart,
  MapPin,
  Star
} from "lucide-react";

import styles from "./PropertyCarousel.module.css";

function PropertyCarousel() {

  const properti = [

    {
      nama:"Villa Rinjani Luxury",
      tipe:"Villa",
      lokasi:"Senggigi, Lombok",
      harga:"Rp 2.500.000 / malam",
      rating:"4.9",
      img:"https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80"
    },

    {
      nama:"Apartemen Mataram Suite",
      tipe:"Apartemen",
      lokasi:"Mataram",
      harga:"Rp 6.000.000 / bulan",
      rating:"4.8",
      img:"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80"
    },

    {
      nama:"Kost Exclusive Yuni",
      tipe:"Kost",
      lokasi:"Mataram",
      harga:"Rp 1.500.000 / bulan",
      rating:"4.7",
      img:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
    },

    {
      nama:"Villa Senaru View",
      tipe:"Villa",
      lokasi:"Senaru",
      harga:"Rp 1.800.000 / malam",
      rating:"4.9",
      img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80"
    }

  ];

  return (

    <section className={styles.section} id="properti">

      <div className={styles.heading}>

        <span>Pilihan Terbaik</span>

        <h2>Temukan Properti Impian Anda</h2>

        <p>
          Koleksi villa, apartemen, dan kost premium dengan
          fasilitas terbaik dan lokasi strategis.
        </p>

      </div>

      <div className={styles.grid}>

        {properti.map((item,index)=>(

          <div
            className={styles.card}
            key={index}
          >

            <div className={styles.image}>

              <img
                src={item.img}
                alt={item.nama}
              />

              <span className={styles.badge}>
                {item.tipe}
              </span>

              <button className={styles.favorite}>
                <Heart size={18}/>
              </button>

            </div>

            <div className={styles.body}>

              <div className={styles.rating}>
                <Star size={16} fill="currentColor"/>
                {item.rating}
              </div>

              <h3>{item.nama}</h3>

              <div className={styles.location}>
                <MapPin size={17}/>
                {item.lokasi}
              </div>

              <div className={styles.footer}>

                <div>

                  <small>Mulai dari</small>

                  <h4>{item.harga}</h4>

                </div>

                <button className={styles.button}>
                  Detail
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default PropertyCarousel;