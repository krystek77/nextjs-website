import styles from './Banner.module.css';
import Title from '../Title/Title';
function Banner({ post: ID }) {
  return (
    <header className={styles.banner}>
      <Title content="Banner" variant="h1" />
      <p>For example post: {ID}</p>
    </header>
  );
}
export default Banner;
