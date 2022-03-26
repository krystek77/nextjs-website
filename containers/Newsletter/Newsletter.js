import React, { useState } from "react";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Input from "../../components/Input/Input";
import Description from "../../components/Description/Description";
import Button from "../../components/Button/Button";
import InputError from "../../components/InputError/InputError";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../hooks";

import styles from "./Newsletter.module.css";

const API_ROUTE_NEWSLETTER = "/api/sendgrid/newsletter";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const { isOpen, setIsOpen, message, setMessage } = useModal(5000);

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
        setMessage(result.message);
        setIsOpen(true);
      } catch (error) {
        console.log(error.message);
      }
      clearInput();
      setError(false);
    }
  };
  const handleInput = (e) => setEmail(e.target.value);
  const clearInput = () => setEmail("");

  return (
    <React.Fragment>
      <Modal
        isOpen={isOpen}
        classes='modal_center'
        toggleModal={() => {
          setIsOpen(false);
          setMessage("");
        }}>
        <Title content='Bardzo dziękujemy 😃' />
        <Description content={message} classes='description_18 description_center' />
      </Modal>
      <section className={styles.newsletter}>
        <div className={styles.newsletter__inner}>
          <Subtitle content='Bądż na bieżąco z nowościami od Pralma' classes='subtitle_max_width_640' />
          <Title content='Newsletter' />
          <Description classes='description_18 description_center'>
            Zapisz się i nie przegap <strong>żadnej promocji</strong> oraz <strong>wartościowych </strong> informacji i materiałów z branży wyposażenie pralni przemysłowych.
          </Description>
          <Description classes='description_18 description_center'>
            Dołącz do społeczności <strong>500+</strong> ciekawych pralniczych innowacji Klientów
          </Description>
          <form onSubmit={subscribeToNewsletter} className={styles.newsletter__form}>
            <InputError isError={error} message='Nieprawidłowy adres email' />
            <Input type='text' value={email} handleInput={handleInput} fieldName='email' placeholder='Wpisz swój email' />
            <Button type='submit' label='Zapisz się' />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Newsletter;
