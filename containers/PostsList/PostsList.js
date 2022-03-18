import PostItemCard from "../../components/PostItemCard/PostItemCard";
import styles from "./PostsList.module.css";

function PostsList({ items }) {
  return items.length ? (
    <section className={styles.news}>
      <div className={styles.news__container}>
        {items.map((item, index) => {
          return <PostItemCard key={index} {...item} />;
        })}
      </div>
    </section>
  ) : null;
}
export default PostsList;
