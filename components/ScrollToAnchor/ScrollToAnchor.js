import styles from './ScrollToAnchor.module.css';
function ScrollToAnchor({ anchor, label }) {
  return (
    <a href={`#${anchor}`} className={styles.scrollToAnchor}>
      {label}
    </a>
  );
}
export default ScrollToAnchor;
