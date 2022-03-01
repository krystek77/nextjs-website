import styles from './Label.module.css';

function Label({ label }) {
  return (
    <div className={styles.label}>
      <div className={styles.label__circle}></div>
      <div className={styles.label__content}>{label}</div>
    </div>
  );
}

export default Label;
