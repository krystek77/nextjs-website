import Image from 'next/image';
import Title from '../Title/Title';
import Description from '../Description/Description';
import LinkButton from '../LinkButton/LinkButton';
import { trimmedStringToWord } from '../../lib';

import styles from './NewsItem.module.css';

function NewsItem({ id, title, date, image, info }) {
  return (
    <article className={styles.newsItem}>
      <aside className={styles.newsItem__image}>
        {/* <Image src={image} alt={title} width='426' height='320' /> */}
        <img src={image} alt={title} width="360" height="270" />
      </aside>
      <header className={styles.newsItem__header}>
        <span className={styles.newsItem__date}>{date}</span>
        <Title
          content={title}
          variant="h2"
          classes="title_display_h5 title_uppercase title_weight_small"
        />
      </header>
      <div className={styles.newsItem__content}>
        <Description
          content={trimmedStringToWord(info)}
          classes="description_18"
        />
      </div>
      <LinkButton
        label="Przeczytaj"
        to={`/wiadomosci/${encodeURIComponent(id)}`} //for slug
      />
    </article>
  );
}
export default NewsItem;
