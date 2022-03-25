/*
 * http://localhost:3000/kontakt-do-pralma
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import Banner from '../components/Banner/Banner';
import Title from '../components/Title/Title';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import ContactData from '../containers/ContactData/ContactData';
import ContactForm from '../containers/ContactForm/ContactForm';
import styles from '../styles/kontakt-do-pralma.module.css';

function Contact() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner classes="banner_height_auto">
        <Title
          variant="h1"
          content="Skontaktuj się z nami"
          classes="title_maxWidth_960 title_bg_white_dark"
        />
      </Banner>
      <ContactData />
      <ContactForm />
    </React.Fragment>
  );
}

Contact.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default Contact;
