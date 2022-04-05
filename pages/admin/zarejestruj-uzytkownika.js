import React from "react";
import styles from "./zarejestruj-uzytkownika.module.css";
import AdminLayout from "components/Layout/AdminLayout";
import Title from "components/Title/Title";
import Description from "components/Description/Description";
import Input from "components/Input/Input";
import SelectInput from "components/Select/Select";
import InputError from "components/InputError/InputError";
import Button from "components/Button/Button";
import RequiredMarker from "components/RequiredMarker/RequiredMarker";
import Modal from "components/Modal/Modal";
import ToggleViewedPassword from "components/ToggleViewedPassword/ToggleViewedPassword";
import { useModal } from "hooks";
import { INPUT_PATTERNS } from "constants/patterns";

const API_ROUTE_SIGNUP_USER = "/api/admin/signup-user";

const ROLES = ["user", "admin"];
function SignUpUserForm() {
  const [formData, setFormData] = React.useState({ email: "", password: "", confirmationPassword: "", role: ROLES[0] });
  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
    confirmationPassword: false,
  });
  const [viewedPasswords, setViewedPasswords] = React.useState({
    confirmationPassword: false,
    password: false,
  });
  const { isOpen, setIsOpen, message, setMessage } = useModal(2000);
  const validateForm = () => {
    let isValid = true;
    const tempErrors = {
      email: false,
      password: false,
      confirmationPassword: false,
    };
    if (formData.email.match(INPUT_PATTERNS.EMAIL) === null) {
      tempErrors.email = true;
      isValid = false;
    }
    if (formData.password.match(INPUT_PATTERNS.PASSWORD) === null) {
      tempErrors.password = true;
      isValid = false;
    }
    if (formData.password !== formData.confirmationPassword) {
      tempErrors.confirmationPassword = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    return isValid;
  };
  const handleForm = async (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("SIGNUP ANOTHER USER", formData);
      try {
        const response = await fetch(API_ROUTE_SIGNUP_USER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (!result.access_token) {
          throw Error(result.message);
        }
        localStorage.setItem("token", JSON.stringify(result.access_token));
        setIsOpen(true);
        setMessage(result.message);
        resetForm();
      } catch (error) {
        setIsOpen(true);
        setMessage(error.message);
      }
    }
  };
  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      confirmationPassword: "",
      role: ROLES[0],
    });
    setErrors({
      email: false,
      password: false,
      confirmationPassword: false,
    });
    setViewedPasswords({
      password: false,
      confirmationPassword: false,
    });
  };
  const toggleViewedPaswords = (e) => {
    if (e.currentTarget.id === "password") {
      setViewedPasswords({ ...viewedPasswords, password: !viewedPasswords.password });
    } else {
      setViewedPasswords({ ...viewedPasswords, confirmationPassword: !viewedPasswords.confirmationPassword });
    }
  };
  return (
    <React.Fragment>
      <Modal
        isOpen={isOpen}
        toggleModal={() => {
          setIsOpen(!isOpen);
          setMessage("");
        }}>
        <Title content='Komunikat' variant='h4' classes='title_display_h5' />
        <Description classes='description_18'>{message}</Description>
      </Modal>
      <div className={styles.signUpUserPage}>
        <Title content='Dodaj użytkownika' classes='title_display_h5 title_center title_mb_1' variant='h2' />
        <form className={styles.signUpUserPage__form} onSubmit={handleForm}>
          <div className={styles.signUpUserPage__inputWrapper}>
            <InputError message='Niepoprawny adres email' isError={errors.email} classes='inputError_top_minus_05' />
            <Input type='text' fieldName='email' placeholder='wpisz adres email' value={formData.email} handleInput={(e) => setFormData({ ...formData, email: e.target.value })} classes='input_mb_1' />
            <RequiredMarker classes='requiredMarker_bottom_minus_1_5' />
          </div>
          <div className={styles.signUpUserPage__inputWrapper}>
            <InputError message='Hasło musi mieć co najmniej 6 znaków, jedną dużą i małą literę oraz jeden znak secjalny' isError={errors.password} classes='inputError_top_minus_05' />
            <Input type={viewedPasswords.password ? "text" : "password"} fieldName='password' placeholder='podaj hasło' value={formData.password} handleInput={(e) => setFormData({ ...formData, password: e.target.value })} classes='input_mb_1' />
            <RequiredMarker classes='requiredMarker_bottom_minus_1_5' />
            <ToggleViewedPassword id='password' action={toggleViewedPaswords} state={viewedPasswords.password} />
          </div>
          <div className={styles.signUpUserPage__inputWrapper}>
            <InputError message='Hasła muszą być takie same' isError={errors.confirmationPassword} classes='inputError_top_minus_05' />
            <Input type={viewedPasswords.confirmationPassword ? "text" : "password"} fieldName='confirmationPassword' placeholder='powtórz hasło' value={formData.confirmationPassword} handleInput={(e) => setFormData({ ...formData, confirmationPassword: e.target.value })} classes='input_mb_1' />
            <RequiredMarker classes='requiredMarker_bottom_minus_1_5' />
            <ToggleViewedPassword id='confirmationPassword' action={toggleViewedPaswords} state={viewedPasswords.confirmationPassword} />
          </div>
          <div className={styles.signUpUserPage__inputWrapper}>
            <SelectInput selected={formData.role} name='role' options={ROLES} action={(e) => setFormData({ ...formData, role: e.target.value })} />
          </div>
          <div className={styles.signUpUserPage__actionButtons}>
            <Button classes='button_mr_2 button_no_wrap' label='dodaj' type='submit' />
            <Button classes='button_dangerous' label='zresetuj' type='button' action={resetForm} />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

SignUpUserForm.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default SignUpUserForm;
