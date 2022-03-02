import Image from "next/image";
import Title from "../Title/Title";
import Description from "../Description/Description";
import LinkButton from "../LinkButton/LinkButton";

import styles from "./NewsItem.module.css";

function NewsItem({ id, image, date, title, info }) {
  return (
    <div className={styles.newsItem}>
      <div className={styles.newsItem__image}>
        <Image src={`/assets/images/${image}.png`} alt={title} width='426' height='320' />
      </div>
      <div className={styles.newsItem__content}>
        <span className={styles.newsItem__date}>{date.toLocaleDateString()}</span>
        <Title content={title} variant='h3' />
        <Description content={info} classes='description_18 description_mb_2' />
        <LinkButton
          label='Przeczytaj'
          to={`/wiadomosci/${encodeURIComponent(id)}`} //for slug
        />
      </div>
    </div>
  );
}
export default NewsItem;
