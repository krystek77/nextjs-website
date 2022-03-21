import Link from 'next/link';
import Logo from '../Logo/Logo';
import Copyright from '../Copyright/Copyright';
import styles from './AdminLayout.module.css';

function AdminLayout({ children }) {
  return (
    <div className={styles.adminLayout}>
      <div className={styles.adminLayout__inner}>
        <aside className={styles.adminLayout__aside}>
          <Logo width="96" height="40" classes="logo_admin logo_mb_2" />
          {/** potential component */}
          <nav className={styles.adminNavigation}>
            <Link href="/admin/czesc-zamienna">
              <a className={styles.adminNavigation__link}>
                formularz części zamiennej
              </a>
            </Link>
            <Link href="/admin/wiadomosc">
              <a className={styles.adminNavigation__link}>
                formularz wiadomości
              </a>
            </Link>
            <Link href="/admin">
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
