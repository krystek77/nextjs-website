import React from 'react';
import Copyright from '../../../components/Copyright/Copyright';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import Title from '../../../components/Title/Title';
import Description from '../../../components/Description/Description';
import InputError from '../../../components/InputError/InputError';
import RequiredMarker from '../../../components/RequiredMarker/RequiredMarker';
import Logo from '../../../components/Logo/Logo';
import Modal from '../../../components/Modal/Modal';
import { useModal } from '../../../hooks';
import { useRouter } from 'next/router';
import styles from './index.module.css';

const API_ROUTE_LOGIN = '/api/user/login';

function Login() {
  const router = useRouter();
  const { isOpen, setIsOpen, message, setMessage } = useModal(2000);
  const [formData, setFormData] = React.useState({ email: '', password: '' });
  const [errors, setErrors] = React.useState({ email: false, password: false });

  const validateForm = () => {
    let isValid = true;
    const tempErrors = {
      email: false,
      password: false,
    };
    if (
      formData.email.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      ) === null
    ) {
      tempErrors.email = true;
      isValid = false;
    }
    if (
      formData.password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
      ) === null
    ) {
      tempErrors.password = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    return isValid;
  };

  const login = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await fetch(API_ROUTE_LOGIN, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (!result.access_token) {
          throw Error(result.message);
        }
        window.localStorage.setItem('token', result.access_token);
        clear();
        router.push('/user/dashboard');
      } catch (error) {
        setIsOpen(true);
        setMessage(error.message);
      }
    }
  };

  const clear = () => setFormData({ email: '', password: '' });

  return (
    <React.Fragment>
      <Modal
        isOpen={isOpen}
        toggleModal={() => {
          setIsOpen(!isOpen);
          setMessage('');
        }}
      >
        <Title content="Komunikat" variant="h4" classes="title_display_h5" />
        <Description classes="description_18">{message}</Description>
      </Modal>
      <div className={styles.loginPage}>
        <div className={styles.loginPage__container}>
          <Logo width="144" height="60" classes="logo_admin logo_mb_2" />
          <form className={styles.loginPage__form} onSubmit={login}>
            <Title
              content="LOGOWANIE"
              variant="h2"
              classes="title_center title_mb_3"
            />
            <div className={styles.loginPage__inputWrapper}>
              <Input
                type="text"
                placeholder="email"
                value={formData.email}
                fieldName="email"
                handleInput={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <InputError
                message="Nieporawny adres email"
                isError={errors.email}
                classes="inputError_top_minus_05"
              />
              <RequiredMarker classes="requiredMarker_bottom_minus_1_5" />
            </div>
            <div className={styles.loginPage__inputWrapper}>
              <Input
                type="text"
                placeholder="hasło"
                value={formData.password}
                fieldName="password"
                handleInput={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <InputError
                message="Hasło musi mieć co najmniej 6 znaków, jedną dużą i małą literę oraz jeden znak secjalny"
                isError={errors.password}
                classes="inputError_top_minus_05"
              />
              <RequiredMarker classes="requiredMarker_bottom_minus_1_5" />
            </div>
            <Button
              type="submit"
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
    </React.Fragment>
  );
}
export default Login;
