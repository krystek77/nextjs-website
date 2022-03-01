import styles from './List.module.css';
import Image from 'next/image';
import { classesNames } from '../../lib';

function List({ items, classes }) {
  const classesString = classesNames(classes, 'list')(styles);
  return items.length ? (
    <ul className={classesString}>
      {items.map((item, index) => (
        <li key={`label_${index}`} className={styles.list__item}>
          <Image
            src="/assets/icons/checked.svg"
            alt="checked"
            width="32"
            height="32"
          />
          <p className={styles.list__content}>{item}</p>
        </li>
      ))}
    </ul>
  ) : null;
}

export default List;
