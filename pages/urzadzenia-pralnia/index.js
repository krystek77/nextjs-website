/*
 * http://localhost:3000/urzadzenia-pralnia
 */
import React from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import ModernLaundryEquipment from '../../containers/ModernLaundryEquipment/ModernLaundryEquipment';
import PageIndicator from '../../components/Banner/PageIndicator/PageIndicator';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import { links } from '../../constants/links';

import styles from './index.module.css';

function LaundryEquipment({ on_premises }) {
  return (
    <React.Fragment>
      <HeadMetaTags />
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

LaundryEquipment.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default LaundryEquipment;

export async function getStaticProps() {
  //fetch data from the API

  return {
    props: {
      on_premises: links[0],
    },
  };
}
