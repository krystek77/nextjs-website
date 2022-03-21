/*
 * http://localhost:3000/urzadzenia-pralnia-samoobslugowa
 */
import React from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../../containers/SiteInProgress/SiteInProgress';
import styles from './index.module.css';

function SelfServiceLaundryEquipment() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner>
        <Title
          variant="h1"
          content="Inteligentne pralnie samoobsługowe"
          classes="title_maxWidth_960 title_light_500"
        />
      </Banner>
      <SiteInProgress page="URZĄDZENIA DO PRALNI SAMOOBSŁUGOWYCH" />
    </React.Fragment>
  );
}

SelfServiceLaundryEquipment.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default SelfServiceLaundryEquipment;
