import PostItemCard from "../../components/PostItemCard/PostItemCard";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import { classesNames } from "../../lib";
import styles from "./SimilarPosts.module.css";

function SimilarPosts({ similarPosts, classes = "" }) {
  const classesString = classesNames(classes, "similarPosts")(styles);

  return similarPosts.length ? (
    <section className={classesString}>
      <header className={styles.similarPosts__header}>
        <Subtitle content='Podobne kategorie tematyczne' classes='subtitle_max_width_760' />
        <Title content='Wiadomości, które mogą Cię zaintersować' />
      </header>
      <div className={styles.similarPosts__container}>
        {similarPosts.map((item) => {
          return <PostItemCard key={item.id} {...item} classes='postItemCard_padding_side' />;
        })}
      </div>
    </section>
  ) : null;
}
export default SimilarPosts;
