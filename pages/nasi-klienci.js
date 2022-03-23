/*
 * http://localhost:3000/nasi-klienci
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import CustomersList from '../containers/CustomersList/CustomersList';

import { customers } from '../constants/customers';
import styles from '../styles/nasi-klienci.module.css';

function Customers() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner classes="banner__customers">
        <Title
          variant="h1"
          content="dla CIEBIE też posiadamy odpowiednie wyposażenie PRALNICZE"
          classes="title_maxWidth_960 title_bg_primary_dark"
        />
      </Banner>
      <CustomersList customers={customers} />
    </React.Fragment>
  );
}

Customers.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default Customers;
