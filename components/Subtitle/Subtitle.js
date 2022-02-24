import styles from './Subtitle.module.css';

function Subtitle({ content }) {
  return (
    <div className={styles.subtitle}>
      <div className={styles.subtitle__ball}></div>
      <p className={styles.subtitle__content}>{content}</p>
    </div>
  );
}

Subtitle.defaultProps = {
  content: 'give some content',
};
export default Subtitle;
