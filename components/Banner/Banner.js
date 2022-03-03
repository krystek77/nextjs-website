import styles from './Banner.module.css';
import Title from '../Title/Title';
function Banner({ post: ID }) {
  return (
    <header className={styles.banner}>
      <Title content="Some Title" variant="h1" classes="title_light_500" />
      <p>For example post: {ID}</p>
    </header>
  );
}
export default Banner;
