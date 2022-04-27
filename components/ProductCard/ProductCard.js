import Link from 'next/link';
import Image from 'next/image';

import Button from '../Button/Button';
import List from '../List/List';
import styles from './ProductCard.module.css';

function ProductCard({ label, path, image, list, children, horizontal }) {
  const formattedList = list.map((item) => {
    return typeof item === 'object' ? item.name : item;
  });

  return horizontal ? (
    <Link href={`/${path}`}>
      <a className={styles.productCardHorizontal}>
        <Image
          src={`/assets/images/${image}`}
          alt={label}
          width="480"
          height="360"
        />
        {children}
        <div className={styles.productCard__overlay}>
          {children}
          <List items={formattedList} classes="list_light" />
          <Button label="Dowiedz się więcej" />
        </div>
      </a>
    </Link>
  ) : (
    <Link href={`/${path}`}>
      <a className={styles.productCard}>
        <Image
          src={`/assets/images/${image}`}
          alt={label}
          width="300"
          height="400"
        />
        {children}
        <div className={styles.productCard__overlay}>
          {children}
          <List items={formattedList} classes="list_light" />
          <Button label="Dowiedz się więcej" />
        </div>
      </a>
    </Link>
  );
}

ProductCard.defaultProps = {
  parent: '/',
  label: 'some machines',
  path: '/',
  image: 'washer_extractors.png',
  list: ['some item 1', 'some item 2', 'some item 3'],
  horizontal: false,
};
export default ProductCard;
