import NewsItem from "../../components/NewsItem/NewsItem";
import styles from "./News.module.css";

function News({ items }) {
  return items.length ? (
    <section className={styles.news}>
      <div className={styles.news__container}>
        {items.map((item, index) => {
          return <NewsItem key={index} {...item} />;
        })}
      </div>
    </section>
  ) : null;
}
export default News;
