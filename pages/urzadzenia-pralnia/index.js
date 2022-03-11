/*
 * http://localhost:3000/urzadzenia-pralnia
 */
import styles from './index.module.css';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import ModernLaundryEquipment from '../../containers/ModernLaundryEquipment/ModernLaundryEquipment';
import PageIndicator from '../../components/Banner/PageIndicator/PageIndicator';
import React from 'react';

function LaundryEquipment({ on_premises }) {
  return (
    <React.Fragment>
      <Banner>
        <Title
          variant="h1"
          content="Najlepsze wyposażenie do pralni przemysłowej"
          classes="title_maxWidth_960 title_bg_white_primary"
        />
        <PageIndicator label="urządzenia" variant="primary" />
      </Banner>
      <main className={styles.laundryEquipment}>
        <ModernLaundryEquipment data={on_premises} />
      </main>
    </React.Fragment>
  );
}
export default LaundryEquipment;

import { links } from '../../constants/links';
export async function getStaticProps() {
  //fetch data from the API

  return {
    props: {
      on_premises: links[0],
    },
  };
}
