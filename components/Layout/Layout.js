import styles from './Layout.module.css';
import Topbar from '../../containers/Topbar/Topbar';
import ScrollButton from '../ScrollButton/ScrollButton';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Topbar/>
      <ScrollButton down />
      <ScrollButton up />
      <main className={styles.layout__content}>{children}</main>
      <h1>Footer</h1>
    </div>
  );
}

export default Layout;
