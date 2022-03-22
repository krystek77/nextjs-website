import Tag from "./Tag/Tag";
import { classesNames } from "../../lib";
import styles from "./Tags.module.css";

function Tags({ classes, tags }) {
  const classesString = classesNames(classes, "tags")(styles);
  return tags.length ? (
    <div className={classesString}>
      <span className={styles.tags__label}>Kategorie: </span>
      {tags.map((tag, index) => {
        return <Tag key={index} tag={tag} />;
      })}
    </div>
  ) : null;
}

Tags.defaultProps = {
  classes: "",
  tags: [],
};
export default Tags;
