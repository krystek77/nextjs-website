import Image from 'next/image';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import NewsItem from '../../components/NewsItem/NewsItem';

import styles from './LatestPosts.module.css';

function LatestPosts({ posts }) {
  return (
    <section className={styles.latestPosts}>
      <header className={styles.latestPosts__header}>
        <Subtitle content="Aktualności ze świata Pralmy" />
        <Title content="Ostatenie wiadomości" />
      </header>
      {posts.length ? (
        <div className={styles.latestPosts__container}>
          {posts.map((post, index) => (
            <NewsItem key={index} {...post} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default LatestPosts;