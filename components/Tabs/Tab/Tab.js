import styles from "./Tab.module.css";
import { classesNames } from "../../../lib";

function Tab({ title, subtitle, classes,toggleTab }) {
  const classesString = classesNames(classes, "tab")(styles);
  return (
    <button className={classesString} type='button' onClick={toggleTab}>
      <span className={styles.tab__title}>{title}</span>
      <span className={styles.tab__subtitle}>{subtitle}</span>
    </button>
  );
}
export default Tab;
