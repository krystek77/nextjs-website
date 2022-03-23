import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [formData, setFormData] = React.useState({
    reason: "",
    market: "",
    name: "",
    lastName: "",
    phone: "",
    city: "",
    company: "",
    email: "",
    message: "",
  });
  const [isNewsletter, setIsNewsletter] = React.useState(true);

  const handleForm = (e) => {
    e.preventDefault();
    handleNewsletter(e)
    //send data
    clearForm();
  };
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleNewsletter = (e) => setIsNewsletter(!isNewsletter);
  const clearForm = () => {
    setFormData({
      reason: "",
      market: "",
      name: "",
      lastName: "",
      phone: "",
      city: "",
      company: "",
      email: "",
      message: "",
    });
    setIsNewsletter(true);
  };

  return (
    <section className={styles.contactFormSection}>
      <div className={styles.contactFormSection__container}>
        <form className={styles.contactFormSection__form} onSubmit={handleForm}>
          <div className={styles.contactFormSection__reason}>
            <Input classes='input_mb_1' type='text' fieldName='reason' handleInput={handleInput} value={formData.reason} placeholder='powód kontaktu' />
          </div>
          <div className={styles.contactFormSection__market}>
            <Input classes='input_mb_1' type='text' fieldName='market' handleInput={handleInput} value={formData.market} placeholder='sektor pralniczy' />
          </div>
          <div className={styles.contactFormSection__name}>
            <Input classes='input_mb_1' type='text' fieldName='name' handleInput={handleInput} value={formData.name} placeholder='imię' />
          </div>
          <div className={styles.contactFormSection__lastName}>
            <Input classes='input_mb_1' type='text' fieldName='lastName' handleInput={handleInput} value={formData.lastName} placeholder='nazwisko' />
          </div>
          <div className={styles.contactFormSection__phone}>
            <Input type='phone' fieldName='phone' handleInput={handleInput} value={formData.phone} placeholder='telefon' />
          </div>
          <div className={styles.contactFormSection__city}>
            <Input classes='input_mb_1' type='text' fieldName='city' handleInput={handleInput} value={formData.city} placeholder='miasto' />
          </div>
          <div className={styles.contactFormSection__company}>
            <Input classes='input_mb_1' type='text' fieldName='company' handleInput={handleInput} value={formData.company} placeholder='firma / instytucja' />
          </div>
          <div className={styles.contactFormSection__email}>
            <Input classes='input_mb_1' type='text' fieldName='email' handleInput={handleInput} value={formData.email} placeholder='email' />
          </div>
          <div className={styles.contactFormSection__message}>
            <textarea rows='10' name='message' onChange={handleInput} value={formData.message} placeholder='wpisz treść...' />
          </div>
          <div className={styles.contactFormSection__newsletter}>
            <label className={styles.contactFormSection__label} htmlFor='newsletter'>
              zapisz się na newsletter
            </label>
            <input className={styles.contactFormSection__input} name='newsletter' id='newsletter' type='checkbox' onChange={handleNewsletter} checked={isNewsletter} />
          </div>
          <Button classes='button_center' label='wyślij' type='submit' />
        </form>
      </div>
    </section>
  );
}
export default ContactForm;
