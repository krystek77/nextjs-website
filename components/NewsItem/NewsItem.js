import Image from "next/image";
import Title from "../Title/Title";
import Description from "../Description/Description";
import LinkButton from "../LinkButton/LinkButton";

import styles from "./NewsItem.module.css";

function NewsItem({ id, title, date, image, info }) {
  return (
    <div className={styles.newsItem}>
      <div className={styles.newsItem__image}>
        {/* <Image src={image} alt={title} width='426' height='320' /> */}
        <img src={image} alt={title} width='360' height='270' />
      </div>
      <div className={styles.newsItem__content}>
        <span className={styles.newsItem__date}>{date}</span>
        <Title content={title} variant='h2' classes='title_display_h4' />
        <Description content={info} classes='description_18 description_mb_2' />
      </div>
      <LinkButton
        label='Przeczytaj'
        to={`/wiadomosci/${encodeURIComponent(id)}`} //for slug
      />
    </div>
  );
}
export default NewsItem;
