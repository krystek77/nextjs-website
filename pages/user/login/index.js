import Copyright from '../../../components/Copyright/Copyright';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import Title from '../../../components/Title/Title';
import Description from '../../../components/Description/Description';
import Logo from '../../../components/Logo/Logo';
import { useRouter } from 'next/router';
import styles from './index.module.css';

function Login() {
  const router = useRouter();
  const login = (e) => {
    e.preventDefault();
    //send login data and if they are correct
    router.push('/admin');
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPage__container}>
        <Logo width="144" height="60" classes="logo_admin logo_mb_2" />
        <form className={styles.loginPageForm} onSubmit={login}>
          <Title
            content="LOGOWANIE"
            variant="h2"
            classes="title_center title_mb_3"
          />
          <Input
            type="text"
            placeholder="email"
            value=""
            fieldName="email"
            handleInput={() => {}}
          />
          <Input
            type="text"
            placeholder="hasło"
            value=""
            fieldName="password"
            handleInput={() => {}}
          />
          <Button
            type="submit"
            action={() => {}}
            label="zaloguj się"
            classes="button_no_wrap button_center"
          />
        </form>
        <Description classes="description_18">
          <span className={styles.loginPage__info}>
            Nie posiadasz konta? Napisz do administratora:
          </span>
          <span className={styles.loginPage__emailAddress}>
            <a href="mailto:k.wrona@pralma.pl">email</a>
          </span>
        </Description>
      </div>
      <Copyright classes="copyright_admin" />
    </div>
  );
}
export default Login;
