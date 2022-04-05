import Title from "components/Title/Title";
import Link from "next/link";
import { useUser } from "hooks";
import styles from "./AdminNavigation.module.css";

function AdminNavigation() {
  const { user } = useUser();
  return user && user.role === "admin" ? (
    <div className={styles.adminNavigation}>
      <Title content='Administrator' variant='h2' classes='title_display_h6 title_mt_1' />
      <Link href='/admin/zarejestruj-uzytkownika'>
        <a className={styles.adminNavigation__link}>Zarejestruj użytkownika</a>
      </Link>
    </div>
  ) : null;
}
export default AdminNavigation;
