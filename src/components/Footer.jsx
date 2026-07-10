import React from "react";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer id="kontak" className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <h2>
            YUNI <span>LIVING</span>
          </h2>

          <p>
            Yuni Living menyediakan villa, apartemen, dan kost premium
            dengan lokasi strategis, fasilitas lengkap, serta pelayanan
            profesional untuk kenyamanan Anda.
          </p>

          <div className={styles.socials}>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>

        {/* Navigasi */}
        <div className={styles.links}>
          <h4>Navigasi</h4>

          <ul>
            <li>
              <a href="#beranda">
                <ChevronRight size={16} />
                <span>Beranda</span>
              </a>
            </li>

            <li>
              <a href="#tentang">
                <ChevronRight size={16} />
                <span>Tentang</span>
              </a>
            </li>

            <li>
              <a href="#properti">
                <ChevronRight size={16} />
                <span>Properti</span>
              </a>
            </li>

            <li>
              <a href="#fasilitas">
                <ChevronRight size={16} />
                <span>Fasilitas</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div className={styles.links}>
          <h4>Hubungi Kami</h4>

          <ul>
            <li>
              <MapPin size={18} />
              <span>Mataram, Lombok, NTB</span>
            </li>

            <li>
              <Phone size={18} />
              <a href="tel:+6281234567890">
                +62 812-3456-7890
              </a>
            </li>

            <li>
              <Mail size={18} />
              <a href="mailto:info@yuniliving.com">
                info@yuniliving.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © {new Date().getFullYear()} Yuni Living. All Rights Reserved.
        </span>

        <div className={styles.policy}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;