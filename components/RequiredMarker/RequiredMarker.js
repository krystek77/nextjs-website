import styles from "./RequiredMarker.module.css";
import { classesNames } from "../../lib";
function RequiredMarker({classes=""}) {
    const classesString = classesNames(classes, "requiredMarker")(styles);
  return (
    <em className={classesString}>
      <sup>*</sup>- pole wymagane
    </em>
  );
}

export default RequiredMarker;
