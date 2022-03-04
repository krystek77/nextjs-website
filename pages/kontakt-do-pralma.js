/*
 * http://localhost:3000/kontakt-do-pralma
 */
import React from 'react';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import styles from '../styles/kontakt-do-pralma.module.css';

function Contact() {
  return (
    <React.Fragment>
      <Banner>
        <Title
          variant="h1"
          content="Skontaktuj się z nami"
          classes="title_maxWidth_960 title_light_500"
        />
      </Banner>
      <main className={styles.contact}></main>
    </React.Fragment>
  );
}
export default Contact;
