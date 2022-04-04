import Link from 'next/link';
import Logo from '../Logo/Logo';
import Copyright from '../Copyright/Copyright';
import styles from './AdminLayout.module.css';

function AdminLayout({ children }) {
  return (
    <div className={styles.adminLayout}>
      <div className={styles.adminLayout__inner}>
        <aside className={styles.adminLayout__aside}>
          <Logo width="144" height="60" classes="logo_admin logo_mb_2" />
          {/** potential component */}
          <nav className={styles.adminNavigation}>
            <Link href="/user/dashboard/czesc-zamienna">
              <a className={styles.adminNavigation__link}>części zamienne</a>
            </Link>
            <Link href="/user/dashboard/wiadomosc">
              <a className={styles.adminNavigation__link}>wiadomości</a>
            </Link>
            <Link href="/user/dashboard/nasze-pralnie">
              <a className={styles.adminNavigation__link}>
                zrealizowane pralnie
              </a>
            </Link>

            <div className={styles.adminNavigation__product}>
              <span className={styles.adminNavigation__titleLinks}>
                Produkt
              </span>
              <Link href="/user/dashboard/produkty/parametr">
                <a className={styles.adminNavigation__link}>+ parametr</a>
              </Link>
              <Link href="/user/dashboardprodukty/sterownik">
                <a className={styles.adminNavigation__link}>+ sterownik</a>
              </Link>
            </div>

            <Link href="/user/dashboard">
              <a className={styles.adminNavigation__link}>admin</a>
            </Link>
            <Link href="/">
              <a className={styles.adminNavigation__link}>strona główna</a>
            </Link>
          </nav>
          {/** end potential component */}
        </aside>
        <main className={styles.adminLayout__content}>{children}</main>
      </div>
      <Copyright classes="copyright_admin" />
    </div>
  );
}
export default AdminLayout;
