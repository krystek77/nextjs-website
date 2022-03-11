import Link from 'next/link';
import SubNavigation from '../SubNavigation/SubNavigation';
import styles from './MainNavigation.module.css';
import { data } from '../../constants/links';

function MainNavigation() {
  return (
    <ul className={styles.mainNavigation}>
      {data.map((menu, index) => {
        return (
          <li className={styles.mainNavigation__item} key={`page_${index + 1}`}>
            <Link href={`/${menu.path}`}>
              <a className={styles.mainNavigation__link}>{menu.label}</a>
            </Link>
            <SubNavigation submenu={menu.submenu} />
          </li>
        );
      })}
    </ul>
  );
}
export default MainNavigation;
