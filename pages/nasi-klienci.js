/*
 * http://localhost:3000/nasi-klienci
 */
import React from 'react';
import Banner from '../components/Banner/Banner';

import styles from '../styles/nasi-klienci.module.css';

function Customers() {
  return (
    <React.Fragment>
      <Banner title='Wyposażymy każdy typ pralni' />
      <main className={styles.customers}></main>
    </React.Fragment>
  );
}
export default Customers;
