/*
 * http://localhost:3000/nasi-klienci
 */
import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import Banner from "../components/Banner/Banner";
import Title from "../components/Title/Title";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import CustomersList from "../containers/CustomersList/CustomersList";
import { customers } from "../constants/customers";
import styles from "../styles/nasi-klienci.module.css";

function Customers() {
  const title = "Przemysłowe wyposażenie pralni dla różnych sektorów pralniczych";
  const description = "Znajdz optymalne do swoich potrzeb wyposażenie pralni przemysłowej 👆 lub rozbuduj istniejącą, w oparciu o najnowocześniejsze urządzenia pralnicze. Wyposażenie pralncze dla hoteli, domów opieki, pralni uslugowych, pralni komercyjnych, żłobków i przedszkoli ... dla każdego.";
  return (
    <React.Fragment>
      <HeadMetaTags title={title} og_title={title} twitter_title={title} description={description} />
      <Banner classes='banner__customers'>
        <Title variant='h1' content='dla CIEBIE odpowiednie WYPOSAŻENIE PRALNICZE' classes='title_maxWidth_960 title_bg_white_dark' />
      </Banner>
      <CustomersList customers={customers} />
    </React.Fragment>
  );
}

Customers.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default Customers;
