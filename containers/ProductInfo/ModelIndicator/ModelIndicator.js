import styles from "./ModelIndicator.module.css";

function ModelIndicator({ model, down }) {
  return <span className={down ? `${styles.modelIndicator} ${styles.modelIndicator_down}` : `${styles.modelIndicator} ${styles.modelIndicator_up}`}>{model}</span>;
}
export default ModelIndicator;
