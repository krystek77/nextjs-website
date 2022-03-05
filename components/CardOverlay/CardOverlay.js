import styles from "./CardOverlay.module.css";
import { classesNames } from "../../lib";

function CardOverlay({ children, classes }) {
  const classesString = classesNames(classes, "cardOverlay")(styles);
  return <div className={classesString}>{children}</div>;
}

export default CardOverlay;
