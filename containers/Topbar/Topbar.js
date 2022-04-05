import React from 'react';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import SmallScreenNavigation from '../../components/SmallScreenNavigation/SmallScreenNavigation';
import Logo from '../../components/Logo/Logo';
import LinkButton from '../../components/LinkButton/LinkButton';
import Button from 'components/Button/Button';
import styles from './Topbar.module.css';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';

function Topbar() {
  const [user, setUser] = React.useState(null);
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem('token');
    router.push('/user/login');
  };
  React.useEffect(() => {
    const token =
      window !== 'undefined' && JSON.parse(localStorage.getItem('token'));
    if (token) {
      const decodedToken = jwt.decode(token);
      setUser({ email: decodedToken.email, role: decodedToken.role });
    }
    return () => {};
  }, []);

  const renderUserNavigation = user ? (
    <div className={styles.userNavigation__loggedIn}>
      <Button
        classes="button_as_link button_mr_05 button_subtitle button_no_wrap"
        label="wyloguj"
        action={logout}
      >
        {user.role === 'admin'
          ? `Administrator: ${user.email}`
          : `Użytkownik: ${user.email}`}
      </Button>
      <div className={styles.userNavigation__divider}></div>
      <LinkButton
        to="/user/dashboard"
        label="Panel użytkownika"
        classes="linkButton_small_text linkButton_ml_1"
      ></LinkButton>
    </div>
  ) : (
    <LinkButton
      to="/user/login"
      label="Moja Pralma"
      classes="linkButton_small_text"
    ></LinkButton>
  );

  return (
    <div className={styles.topbar}>
      <Logo width="96" height="40" />
      <MainNavigation />
      <div className={styles.userNavigation}>{renderUserNavigation}</div>
      <SmallScreenNavigation />
    </div>
  );
}
export default Topbar;
