/*
 * http://localhost:3000/nasi-klienci
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';

import styles from '../styles/nasi-klienci.module.css';

function Customers() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner>
        <Title
          variant="h1"
          content="Wyposażymy każdą pralnię"
          classes="title_maxWidth_960 title_light_500"
        />
      </Banner>
      <SiteInProgress page="Klienci" />
    </React.Fragment>
  );
}

Customers.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default Customers;
