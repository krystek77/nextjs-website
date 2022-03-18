import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import PostItemCard from '../../components/PostItemCard/PostItemCard';

import styles from './LatestPosts.module.css';

function LatestPosts({ posts }) {
  return (
    <section className={styles.latestPosts}>
      <header className={styles.latestPosts__header}>
        <Subtitle content="Aktualności ze świata Pralmy" />
        <Title content="Ostatnie wiadomości" />
      </header>
      {posts.length ? (
        <div className={styles.latestPosts__container}>
          {posts.map((post, index) => (
            <PostItemCard key={index} {...post} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default LatestPosts;
