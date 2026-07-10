import React from "react";
import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./FloatingButtons.module.css";

function FloatingButtons() {
  return (
    <div className={styles.floatingContainer}>
      {/* WhatsApp */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.btn} ${styles.waBtn}`}
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={28} />

        <span className={styles.tooltip}>
          Chat WhatsApp
        </span>
      </a>

      {/* Email */}
      <a
        href="mailto:halo@yuniliving.com"
        className={`${styles.btn} ${styles.emailBtn}`}
        aria-label="Email"
      >
        <Mail size={26} />

        <span className={styles.tooltip}>
          Kirim Email
        </span>
      </a>
    </div>
  );
}

export default FloatingButtons;