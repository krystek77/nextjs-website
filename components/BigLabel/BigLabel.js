import styles from './BigLabel.module.css';
import { classesNames } from '../../lib';

function BigLabel({ classes, content }) {
  const classesString = classesNames(classes, 'bigLabel')(styles);
  return <span className={classesString}>{content}</span>;
}

export default BigLabel;
