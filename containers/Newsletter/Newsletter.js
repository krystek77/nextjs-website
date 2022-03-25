import React, { useState } from "react";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import InputError from "../../components/InputError/InputError";

import styles from "./Newsletter.module.css";

const API_ROUTE_NEWSLETTER = "/api/sendgrid/newsletter";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const isEmail = () => {
    let isValid = true;
    let error = false;
    if (email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) === null) {
      isValid = false;
      error = true;
    }
    setError(error);
    return isValid;
  };

  const subscribeToNewsletter = async (e) => {
    e.preventDefault();

    if (isEmail()) {
      try {
        const response = await fetch(API_ROUTE_NEWSLETTER, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(email) });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error.message);
      }
      clearInput();
    }
  };
  const handleInput = (e) => setEmail(e.target.value);
  const clearInput = () => setEmail("");

  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletter__inner}>
        <Subtitle content='Bądż na bieżąco - wszystko co chcesz wiedzieć mając pralnię przemysłową' classes='subtitle_max_width_640' />
        <Title content='Newsletter' />
        <form onSubmit={subscribeToNewsletter} className={styles.newsletter__form}>
          <InputError isError={error} message='Nieprawidłowy adres email' />
          <Input type='text' value={email} handleInput={handleInput} fieldName='email' placeholder='Wpisz swój email' />
          <Button type='submit' label='Zapisz się' />
        </form>
      </div>
    </section>
  );
}
export default Newsletter;
