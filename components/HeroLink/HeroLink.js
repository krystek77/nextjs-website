import { classesNames } from '../../lib';
import styles from './HeroLink.module.css';
import Link from 'next/link';
import Image from 'next/image';

function HeroLink({ label, to, classes, children }) {
  const classesString = classesNames(classes, 'link')(styles);
  return (
    <div className={styles.link__outer}>
      <div className={styles.link__overlay}>{children}</div>
      <Link href={to}>
        <a className={classesString}>{label}</a>
      </Link>
    </div>
  );
}
export default HeroLink;
