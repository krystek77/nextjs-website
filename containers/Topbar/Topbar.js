import MainNavigation from '../../components/MainNavigation/MainNavigation';
import SmallScreenNavigation from '../../components/SmallScreenNavigation/SmallScreenNavigation';
import Logo from '../../components/Logo/Logo';
import UserNavigation from 'components/UserNavigation/UserNavigation';
import styles from './Topbar.module.css';

function Topbar() {
  return (
    <div className={styles.topbar}>
      <Logo width="96" height="40" />
      <MainNavigation />
      <UserNavigation />
      <SmallScreenNavigation />
    </div>
  );
}
export default Topbar;
