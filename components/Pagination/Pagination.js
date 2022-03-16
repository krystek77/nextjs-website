import Link from "next/link";
import Image from "next/image";
import styles from "./Pagination.module.css";
import router from "next/router";

function Pagination({ pageNumber, href, page }) {
  const COUNT_LINKS = 2;
  // const prev = () => {
  //   if (page > 1) {
  //     router.push(`${href}/${page - 1}`);
  //   }
  // };
  // const next = () => {
  //   if (page < pageNumber) {
  //     router.push(`${href}/${page + 1}`);
  //   }
  // };
  return (
    <section className={styles.pagination}>
      <Link href={`${href}/${page - 1}`} type='button' scroll={false}>
        <a className={`${styles.pagination__button} ${page === 1 && styles.pagination__button_disabled}`}>
          <Image src='/assets/icons/arrow_left_thin.svg' alt='poprzednia strona' width='16' height='14' />
        </a>
      </Link>
      {/* <button className={`${styles.pagination__button} ${page === 1 && styles.pagination__button_disabled}`} type='button' onClick={prev}>
        <Image src='/assets/icons/arrow_left_thin.svg' alt='poprzednia strona' width='16' height='14' />
      </button> */}
      {Array.from({ length: pageNumber }).map((_, index) => {
        return index <= COUNT_LINKS - 1 ? (
          <Link key={index} href={`${href}/${index + 1}`} scroll={false}>
            <a className={styles.pagination__link}>{index + 1}</a>
          </Link>
        ) : null;
      })}
      <Link href={`${href}/${page + 1}`} type='button' scroll={false}>
        <a className={`${styles.pagination__button} ${page === pageNumber && styles.pagination__button_disabled}`}>
          <Image src='/assets/icons/arrow_right_thin.svg' alt='następna strona' width='16' height='14' />
        </a>
      </Link>
      {/* <button className={`${styles.pagination__button} ${page === pageNumber && styles.pagination__button_disabled}`} type='button' onClick={next}>
        <Image src='/assets/icons/arrow_right_thin.svg' alt='następna strona' width='16' height='14' />
      </button> */}
    </section>
  );
}
export default Pagination;
