import Link from "next/link";
import Image from "next/image";
import styles from "./Pagination.module.css";
import router from "next/router";

function Pagination({ pageNumber, href, page }) {
  const prev = () => {
    router.push(`${href}/${page - 1}`);
  };
  const next = () => {
    router.push(`${href}/${page + 1}`);
  };
  return (
    <section className={styles.pagination}>
      <button className={styles.pagination__button} type='button' onClick={prev}>
        <Image src='/assets/icons/arrow_left_thin.svg' alt='poprzednia strona' width='16' height='14' />
      </button>
      {Array.from({ length: pageNumber }).map((_, index) => {
        return (
          <Link key={index} href={`${href}/${index + 1}`} scroll={false}>
            <a className={styles.pagination__link}>{index + 1}</a>
          </Link>
        );
      })}
      <button className={styles.pagination__button} type='button' onClick={next}>
        <Image src='/assets/icons/arrow_right_thin.svg' alt='następna strona' width='16' height='14' />
      </button>
    </section>
  );
}
export default Pagination;
