import Link from 'next/link';
import SubNavigation from '../SubNavigation/SubNavigation';
import styles from './MainNavigation.module.css';
import { links } from '../../constants/links';

function MainNavigation() {
  return (
    <ul className={styles.mainNavigation}>
      {links.map((link, index) => {
        return (
          <li className={styles.mainNavigation__item} key={`page_${index + 1}`}>
            <Link href={`/${link.path}`}>
              <a className={styles.mainNavigation__link}>{link.label}</a>
            </Link>
            <SubNavigation submenu={link.submenu} />
          </li>
        );
      })}
    </ul>
  );
}
export default MainNavigation;
