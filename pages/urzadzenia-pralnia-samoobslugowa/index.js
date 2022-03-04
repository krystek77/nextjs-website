/*
 * http://localhost:3000/urzadzenia-pralnia-samoobslugowa
 */
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import styles from './index.module.css';

function SelfServiceLaundryEquipment() {
  return (
    <React.Fragment>
      <Banner>
        <Title
          variant="h1"
          content="Inteligentne pralnie samoobsługowe"
          classes="title_maxWidth_960 title_light_500"
        />
      </Banner>
      <main className={styles.selfServiceLaundryEquipment}></main>
    </React.Fragment>
  );
}
export default SelfServiceLaundryEquipment;
