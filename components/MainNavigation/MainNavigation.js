import styles from './MainNavigation.module.css';
import Link from 'next/link';
import { data } from '../../constants/links';

function MainNavigation() {
  return (
    <ul className={styles.mainNavigation}>
      {data.map((page, index) => {
        return (
          <li
            className={styles.mainNavigation__item}
            key={`page_${index + 1}`}
            tabIndex={-1}
          >
            <Link href={page.path}>
              <a className={styles.mainNavigation__link}>{page.label}</a>
            </Link>
            {page.submenu.length ? (
              <ul className={styles.mainNavigation__subNavigation}>
                {page.submenu.map((subpage, index) => {
                  return (
                    <li
                      className={styles.mainNavigation__subItem}
                      key={`subpage_${index + 1}`}
                    >
                      <Link href={`${page.path}${subpage.path}`}>
                        <a className={styles.mainNavigation__subLink}>
                          {subpage.label}
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
export default MainNavigation;
