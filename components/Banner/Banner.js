import styles from './Banner.module.css';
import Title from '../Title/Title';
function Banner({ post: ID,title }) {
  return (
    <header className={styles.banner}>
      <Title content={title} variant="h1" classes="title_light_500 title_maxWidth_760 title_center" />
      {ID && <p>For example post: {ID}</p>}
    </header>
  );
}
Banner.defaultProps = {
  title:'Some awesome title'
}
export default Banner;
