import Link from "next/link";
import Logo from "../Logo/Logo";
import UserNavigation from "components/UserNavigation/UserNavigation";
import AdminNavigation from "components/AdminNavigation/AdminNavigation";
import Copyright from "../Copyright/Copyright";
import Title from "components/Title/Title";
import styles from "./AdminLayout.module.css";

function AdminLayout({ children }) {
  return (
    <div className={styles.adminLayout}>
      <div className={styles.adminLayout__inner}>
        <aside className={styles.adminLayout__aside}>
          <Logo width='144' height='60' classes='logo_admin logo_mb_2' />

          <nav className={styles.adminNavigation}>
            <Title content='Użytkownik' variant='h2' classes='title_display_h6 ' />
            <Link href='/user/dashboard/czesc-zamienna'>
              <a className={styles.adminNavigation__link}>części zamienne</a>
            </Link>
            <Link href='/user/dashboard/wiadomosc'>
              <a className={styles.adminNavigation__link}>wiadomości</a>
            </Link>
            <Link href='/user/dashboard/nasze-pralnie'>
              <a className={styles.adminNavigation__link}>zrealizowane pralnie</a>
            </Link>

            <div className={styles.adminNavigation__product}>
              <span className={styles.adminNavigation__titleLinks}>Produkt</span>
              <Link href='/user/dashboard/produkty/parametr'>
                <a className={styles.adminNavigation__link}>+ parametr</a>
              </Link>
              <Link href='/user/dashboard/produkty/sterownik'>
                <a className={styles.adminNavigation__link}>+ sterownik</a>
              </Link>
              <Link href='/user/dashboard/produkty/przypisz-produkt'>
                <a className={styles.adminNavigation__link}>+ przypisz produkt</a>
              </Link>
              <Link href='/user/dashboard/produkty/urzadzenie'>
                <a className={styles.adminNavigation__link}>
                  <b>+ URZĄDZENIE</b>
                </a>
              </Link>
            </div>
            <Link href='/'>
              <a className={styles.adminNavigation__link}>home</a>
            </Link>
          </nav>
          <AdminNavigation />
          <UserNavigation classes='userNavigation_vertical' />
        </aside>
        <main className={styles.adminLayout__content}>{children}</main>
      </div>
      <Copyright classes='copyright_admin' />
    </div>
  );
}
export default AdminLayout;
