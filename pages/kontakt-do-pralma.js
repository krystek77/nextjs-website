/*
 * http://localhost:3000/kontakt-do-pralma
 */
import React from "react";
import Banner from "../components/Banner/Banner";
import styles from '../styles/kontakt-do-pralma.module.css'

function Contact() {
  return (
    <React.Fragment>
      <Banner title='Skontaktuj się z nami' />
      <main className={styles.contact}></main>
    </React.Fragment>
  );
}
export default Contact;
