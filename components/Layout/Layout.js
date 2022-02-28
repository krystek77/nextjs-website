import Topbar from "../../containers/Topbar/Topbar";
import styles from "./Layout.module.css";


function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Topbar />
      <main className={styles.layout__content}>{children}</main>
    </div>
  );
}

export default Layout;
