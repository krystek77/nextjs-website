import styles from './CustomersLinks.module.css';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Link from 'next/link';
import Image from 'next/image';
import Label from '../../components/Label/Label';

function CustomersLinks({ customers }) {
  return customers.length ? (
    <section className={styles.customersLinks}>
      <header className={styles.customersLinks__header}>
        <Subtitle content="Twoja pralnia" />
        <Title
          content="z PRALMA znajdziesz rozwiązania pralnicze dla różnych sektorów prania"
          classes="title_maxWidth_960"
        />
      </header>
      <div className={styles.customersLinks__content}>
        {customers.map(({ title, image }, index) => (
          <Link
            scroll={false}
            key={index}
            href={`/nasi-klienci#${title
              .replace(/[\s+,*]/g, '')
              .toLowerCase()}`}
          >
            <a className={styles.customersLinks__link}>
              <Image
                src={`/assets/images/customers/${image}.webp`}
                alt={title}
                layout="fill"
              />
              <Label
                label={title}
                classes={`label_small label_uppercase label_bg_opacity ${
                  index % 2 === 0 ? 'label_top_left' : 'label_bottom_right'
                } `}
              />
            </a>
          </Link>
        ))}
      </div>
    </section>
  ) : null;
}
CustomersLinks.defaultProps = {
  customers: [],
};
export default CustomersLinks;
