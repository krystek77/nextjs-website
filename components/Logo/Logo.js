import Link from 'next/link';
import Image from 'next/image';
import { classesNames } from '../../lib';
import styles from './Logo.module.css';

function Logo({ width, height, classes = '' }) {
  const classesString = classesNames(classes, 'logo')(styles);
  return (
    <Link href="/">
      <a className={classesString}>
        <Image
          src="/assets/images/logo.png"
          alt="logo pralma"
          width={width}
          height={height}
        />
      </a>
    </Link>
  );
}
export default Logo;
