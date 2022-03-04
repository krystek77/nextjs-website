/*
 * http://localhost:3000/nasi-klienci
 */
import React from 'react';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';

import styles from '../styles/nasi-klienci.module.css';

function Customers() {
  return (
    <React.Fragment>
      <Banner>
        <Title
          variant="h1"
          content="Wyposażymy każdą pralnię"
          classes="title_maxWidth_960 title_light_500"
        />
      </Banner>
      <main className={styles.customers}></main>
    </React.Fragment>
  );
}
export default Customers;
