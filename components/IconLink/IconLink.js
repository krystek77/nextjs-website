import Link from "next/link";
import Image from "next/image";
import { classesNames } from "../../lib";
import styles from "./IconLink.module.css";

function IconLink({ label, to, classes, src, alt, width, height }) {
  const classesString = classesNames(classes, "iconLink")(styles);
  return (
    <Link href={to}>
      <a className={classesString}>
        <span className={styles.iconLink__icon}>
          <Image src={`/assets/icons/${src}.svg`} alt={alt} width={width} height={height} />
        </span>
        <span className={styles.iconLink__label}>{label}</span>
      </a>
    </Link>
  );
}
export default IconLink;
