import Image from "next/image";
import { classesNames } from "../../../lib";
import styles from "./PageIndicator.module.css";

function PageIndicator({ label, classes, variant }) {
  const classesString = classesNames(classes, "pageIndicator")(styles);
  return variant === "white" ? (
    <p className={classesString}>
      <Image src='/assets/icons/page_indicator_light.svg' alt='wskaźnik' width='16' height='16' />
      <span className={`${styles.pageIndicator__label} ${styles.pageIndicator__label_white}`}>{label}</span>
    </p>
  ) : variant === "red" ? (
    <p className={classesString}>
      <Image src='/assets/icons/page_indicator_red.svg' alt='wskaźnik' width='16' height='16' />
      <span className={`${styles.pageIndicator__label} ${styles.pageIndicator__label_red}`}>{label}</span>
    </p>
  ) : variant === "primary" ? (
    <p className={classesString}>
      <Image src='/assets/icons/page_indicator_primary.svg' alt='wskaźnik' width='16' height='16' />
      <span className={`${styles.pageIndicator__label} ${styles.pageIndicator__label_primary}`}>{label}</span>
    </p>
  ) : (
    <p className={classesString}>
      <Image src='/assets/icons/page_indicator_dark.svg' alt='wskaźnik' width='16' height='16' />
      <span className={styles.pageIndicator__label}>{label}</span>
    </p>
  );
}

PageIndicator.defaultProps = {
  label: "Some label",
  classes: "",
  variant: "dark",
};

export default PageIndicator;
