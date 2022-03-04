/*
 * http://localhost:3000/urzadzenia-pralnia
 */
import styles from './index.module.css';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import ModernLaundryEquipment from '../../containers/ModernLaundryEquipment/ModernLaundryEquipment';
import PageIndicator from '../../components/Banner/PageIndicator/PageIndicator';
import React from 'react';

function LaundryEquipment() {
  return (
    <React.Fragment>
      <Banner>
        <Title
          variant="h1"
          content="Najlepsze do pralni przemysłowej"
          classes="title_maxWidth_960 title_light_500"
        />
        <PageIndicator label="Urządzenia" />
      </Banner>
      <main className={styles.laundryEquipment}>
        <ModernLaundryEquipment />
      </main>
    </React.Fragment>
  );
}
export default LaundryEquipment;
