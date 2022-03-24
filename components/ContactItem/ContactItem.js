import Image from 'next/image';
import styles from './ContactItem.module.css';
import { classesNames } from '../../lib';

function ContactItem({ to, src, alt, width, height, label, classes = '' }) {
  const classesString = classesNames(classes, 'contactItem')(styles);
  return (
    <a href={to} className={classesString}>
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
