import React from 'react';
import { MessageCircle, Mail } from 'lucide-react';
import styles from './FloatingButtons.module.css';

function FloatingButtons() {
  return (
    <div className={styles.floatingContainer}>
      {/* Tombol WhatsApp */}
      <a 
        href="https://wa.me/6281234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.btn} ${styles.waBtn}`}
        title="Chat via WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Tombol Email */}
      <a 
        href="mailto:halo@yuniarliving.com" 
        className={`${styles.btn} ${styles.emailBtn}`}
        title="Kirim Email"
      >
        <Mail size={28} />
      </a>
    </div>
  );
}

export default FloatingButtons;