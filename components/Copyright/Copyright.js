import { classesNames } from '../../lib';
import styles from './Copyright.module.css';
function Copyright({ classes = '' }) {
  const classesString = classesNames(classes, 'copyright')(styles);
  return (
    <p className={classesString}>
      Copyright 2022 by Krystian Wrona. Wszystkie prawa zastrzeżone.
    </p>
  );
}
export default Copyright;
