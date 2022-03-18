import Image from 'next/image';
import Title from '../Title/Title';
import Description from '../Description/Description';
import LinkButton from '../LinkButton/LinkButton';
import moment from 'moment';
import 'moment/locale/pl';
moment.locale('pl');

import { trimmedStringToWord } from '../../lib';

import styles from './NewsItem.module.css';

function NewsItem({ id, title, date, image, info }) {
  return (
    <article className={styles.newsItem}>
      <aside className={styles.newsItem__image}>
        <img src={image} alt={title} width="360" height="270" />
      </aside>
      <header className={styles.newsItem__header}>
        <span className={styles.newsItem__date}>
          {moment(date, 'YYYY-MM-DD').fromNow()}
        </span>
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
        to={`/wiadomosci/${encodeURIComponent(id)}`}
      />
    </article>
  );
}
export default NewsItem;
