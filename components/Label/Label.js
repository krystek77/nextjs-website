import styles from "./Label.module.css";
import { classesNames } from "../../lib";

function Label({ label, classes }) {
  const classesString = classesNames(classes, "label")(styles);
  return (
    <div className={classesString}>
      <div className={styles.label__circle}></div>
      <div className={styles.label__content}>{label}</div>
    </div>
  );
}

export default Label;
