import styles from './Pagination.module.css';
import Link from 'next/link';

function Pagination({ pageNumber }) {
  return (
    <section className={styles.pagination}>
      {Array.from({ length: pageNumber }).map((_, index) => {
        return (
          <Link
            key={index}
            href={`/czesci-zamienne-pralki-przemyslowe/strona/[page]`}
            as={`/czesci-zamienne-pralki-przemyslowe/strona/${index + 1}`}
            scroll={false}
          >
            <a className={styles.pagination__link}>{index + 1}</a>
          </Link>
        );
      })}
    </section>
  );
}
export default Pagination;
