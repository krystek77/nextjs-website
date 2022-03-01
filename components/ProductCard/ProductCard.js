import Link from 'next/link';
import Label from './Label/Label';
import Button from '../Button/Button';
import Image from 'next/image';
import styles from './ProductCard.module.css';

function ProductCard({ parent, label, path, image, list }) {
  return (
    <Link href={`${parent}${path}`}>
      <a className={styles.productCard}>
        <Label label={label} />
        <Image
          src={`/assets/images/${image}`}
          alt={label}
          width="260"
          height="350"
        />
        <div className={styles.productCard__overlay}>
          <Label label={label} />
          {list.length ? (
            <ul className={styles.list}>
              {list.map((item, index) => (
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
          ) : null}
          <Button label="Dowiedz się więcej" />
        </div>
      </a>
    </Link>
  );
}
export default ProductCard;
