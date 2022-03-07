import styles from "./ContentTab.module.css";
import {classesNames} from '../../../lib';

function ContentTab({ children,classes }) {
  const classesString = classesNames(classes,'contentTab')(styles)
  return <div className={classesString}>{children}</div>;
}
export default ContentTab;
