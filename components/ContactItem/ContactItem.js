import Image from 'next/image';
import styles from './ContactItem.module.css';

function ContactItem({ to, src, alt, width, height, label }) {
  return (
    <a href={to} className={styles.contactItem}>
      <Image
        src={`/assets/icons/${src}.svg`}
        alt={alt}
        width={width}
        height={height}
      />
      <span className={styles.contactItem__label}>{label}</span>
    </a>
  );
}
export default ContactItem;
