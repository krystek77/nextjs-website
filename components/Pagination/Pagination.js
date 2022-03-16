import styles from './Pagination.module.css';
import Link from 'next/link';

function Pagination() {
  return (
    <section className={styles.pagination}>
      <Link
        href={`/czesci-zamienne-pralki-przemyslowe/strona/[page]`}
        as={`/czesci-zamienne-pralki-przemyslowe/strona/1`}
        scroll={false}
      >
        <a className={styles.pagination__link}>1</a>
      </Link>
      <Link
        href={`/czesci-zamienne-pralki-przemyslowe/strona/[page]`}
        as={`/czesci-zamienne-pralki-przemyslowe/strona/2`}
        scroll={false}
      >
        <a className={styles.pagination__link}>2</a>
      </Link>
    </section>
  );
}
export default Pagination;
