import React from "react";
import styles from "./zarejestruj-uzytkownika.module.css";
import AdminLayout from "components/Layout/AdminLayout";
import Title from "components/Title/Title";
import Input from "components/Input/Input";
import SelectInput from "components/Select/Select";
import InputError from "components/InputError/InputError";
import Button from "components/Button/Button";
import RequiredMarker from "components/RequiredMarker/RequiredMarker";
import {INPUT_PATTERNS} from 'constants/patterns'

const ROLES = ["user", "admin"];
function SignUpUserForm() {
  const [formData, setFormData] = React.useState({ email: "", password: "", confirmationPassword: "", role: ROLES[0] });
  const [errors, setErrors] = React.useState({
    email: false,
    password: false,
    confirmationPassword: false,
  });
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
  const handleForm = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("SIGNUP ANOTHER USER", formData);
      //request to save new user in database
      resetForm();
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
  };

  return (
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
          <Input type='text' fieldName='password' placeholder='podaj hasło' value={formData.password} handleInput={(e) => setFormData({ ...formData, password: e.target.value })} classes='input_mb_1' />
          <RequiredMarker classes='requiredMarker_bottom_minus_1_5' />
        </div>
        <div className={styles.signUpUserPage__inputWrapper}>
          <InputError message='Hasła muszą być takie same' isError={errors.confirmationPassword} classes='inputError_top_minus_05' />
          <Input type='text' fieldName='confirmationPassword' placeholder='powtórz hasło' value={formData.confirmationPassword} handleInput={(e) => setFormData({ ...formData, confirmationPassword: e.target.value })} classes='input_mb_1' />
          <RequiredMarker classes='requiredMarker_bottom_minus_1_5' />
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
  );
}

SignUpUserForm.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default SignUpUserForm;
