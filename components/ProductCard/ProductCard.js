import Link from 'next/link';
import Image from 'next/image';

import Button from '../Button/Button';
import List from '../List/List';
import styles from './ProductCard.module.css';

function ProductCard({ label, path, image, list, children }) {
  return (
    <Link href={`/${path}`}>
      <a className={styles.productCard}>
        <Image
          src={`/assets/images/${image}`}
          alt={label}
          width="260"
          height="350"
        />
        {children}
        <div className={styles.productCard__overlay}>
          {children}
          <List items={list} classes="list_light" />
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
};
export default ProductCard;
