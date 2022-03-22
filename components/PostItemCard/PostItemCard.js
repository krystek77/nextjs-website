import Title from "../Title/Title";
import Description from "../Description/Description";
import LinkButton from "../LinkButton/LinkButton";
import Tags from "../Tags/Tags";
import moment from "moment";
import "moment/locale/pl";
moment.locale("pl");

import { trimmedStringToWord, classesNames } from "../../lib";
import styles from "./PostItemCard.module.css";

function PostItemCard({ id, title, date, image, info, classes = "", tags }) {
  const classesString = classesNames(classes, "postItemCard")(styles);
  return (
    <article className={classesString}>
      <aside className={styles.postItemCard__image}>
        <img src={image} alt={title} width='360' height='270' />
      </aside>
      <header className={styles.postItemCard__header}>
        <span className={styles.postItemCard__date}>{moment(date, "YYYY-MM-DD").fromNow()}</span>
        <Title content={title} variant='h2' classes='title_display_h5 title_uppercase title_weight_small' />
      </header>
      <div className={styles.postItemCard__content}>
        <Description content={trimmedStringToWord(info)} classes='description_18' />
        <Tags tags={tags} />
      </div>
      <LinkButton classes='linkButton_center' label='Przeczytaj' to={`/wiadomosci/${encodeURIComponent(id)}`} />
    </article>
  );
}
export default PostItemCard;
