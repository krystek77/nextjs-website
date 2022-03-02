import styles from "./Layout.module.css";
import Topbar from "../../containers/Topbar/Topbar";
import Footer from "../../containers/Footer/Footer";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Topbar />
      <main className={styles.layout__content}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
