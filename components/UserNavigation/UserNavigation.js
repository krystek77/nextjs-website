import Button from 'components/Button/Button';
import LinkButton from 'components/LinkButton/LinkButton';
import { useUser } from 'hooks';
import styles from './UserNavigation.module.css';

function UserNavigation() {
  const { user, logout } = useUser();
  return (
    <div className={styles.userNavigation}>
      {user ? (
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
      )}
    </div>
  );
}

export default UserNavigation;
