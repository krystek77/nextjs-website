import styles from "./Description.module.css";
import { classesNames } from "../../lib";

function Description({ content, children, classes }) {
  const classesString = classesNames(classes, "description")(styles);
  if (content) return <p className={classesString}>{content}</p>;
  else return <p className={classesString}>{children}</p>;
}

Description.defaultProps = {
  content: "",
};

export default Description;
