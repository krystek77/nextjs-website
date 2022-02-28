import Link from 'next/link';
import styles from "./SubNavigation.module.css";

function SubNavigation({ page }) {
  return page.submenu.length ? (
    <ul className={styles.subNavigation}>
      {page.submenu.map((item, index) => {
        return (
          <li className={styles.subNavigation__item} key={`item_${index + 1}`}>
            <Link href={`${page.path}${item.path}`}>
              <a className={styles.subNavigation__link}>{item.label}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  ) : null;
}

export default SubNavigation;
