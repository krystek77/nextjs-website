import styles from './Layout.module.css';
import MainNavigation from '../MainNavigation/MainNavigation';
import ScrollButton from '../ScrollButton/ScrollButton';
import Link from 'next/link';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <MainNavigation />
      <Link href="/">Go Home</Link>
      <ScrollButton down />
      <ScrollButton up />
      <main className={styles.layout__content}>{children}</main>
      <h1>Footer</h1>
    </div>
  );
}

export default Layout;
