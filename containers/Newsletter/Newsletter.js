import React, { useState } from "react";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Button from "../../components/Button/Button";

import styles from "./Newsletter.module.css";

function Newsletter() {
  const [email, setEmail] = useState("");

  const subscribeToNewsletter = (e) => {
    e.preventDefault();
    clearInput();
  };
  const handleInput = (e) => setEmail(e.target.value);
  const clearInput = () => setEmail("");

  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletter__inner}>
        <Subtitle content='Bądż na bieżąco - wszystko co chcesz wiedzieć mając pralnię przemysłową' classes="subtitle_max_width_640" />
        <Title content='Newsletter' />
        <form onSubmit={subscribeToNewsletter} className={styles.newsletter__form}>
          {/** component */}
          <input className={styles.input} type='text' value={email} onChange={handleInput} placeholder='Wpisz swój email' />
          <Button type='submit' label='Zapisz się' />
        </form>
      </div>
    </section>
  );
}
export default Newsletter;
