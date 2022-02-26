import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

function Logo({width,height}) {
  return (
    <Link href='/'>
      <a className={styles.logo}>
        <Image src='/assets/images/logo.png' alt='logo pralma' width={width} height={height} />
      </a>
    </Link>
  );
}
export default Logo;
