import styles from "./Parameter.module.css";

function Parameter({ name, value, unit }) {
  return (
    <div className={styles.parameter}>
      <div className={styles.parameter__name}>{name}</div>
      <div className={styles.parameter__valueContainer}>
        <span className={styles.parameter__value}>{value}</span>
        <span className={styles.parameter__unit}>{`${unit !== "" ? `[${unit}]` : ""}`}</span>
      </div>
    </div>
  );
}
export default Parameter;
