import styles from "./Subtitle.module.css";
import { classesNames } from "../../lib";

function Subtitle({ content, classes }) {
  const classesString = classesNames(classes, "subtitle")(styles);
  return (
    <div className={classesString}>
      <div className={styles.subtitle__ball}></div>
      <p className={styles.subtitle__content}>{content}</p>
    </div>
  );
}

Subtitle.defaultProps = {
  content: "give some content",
};
export default Subtitle;
