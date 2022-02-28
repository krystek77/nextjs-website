import styles from "./Layout.module.css";
import Topbar from "../../containers/Topbar/Topbar";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Topbar />
      <main className={styles.layout__content}>{children}</main>
    </div>
  );
}

export default Layout;