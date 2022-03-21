/*
 * http://localhost:3000/kontakt-do-pralma
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import styles from '../styles/kontakt-do-pralma.module.css';

function Contact() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner>
        <Title
          variant="h1"
          content="Skontaktuj się z nami"
          classes="title_maxWidth_960 title_light_500"
        />
      </Banner>
      <SiteInProgress page="KONTAKT" />
    </React.Fragment>
  );
}

Contact.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default Contact;
