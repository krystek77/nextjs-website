import React from 'react';
import ContactItem from '../../components/ContactItem/ContactItem';

import styles from './ContactBar.module.css';

const contactData = [
  {
    to: 'mailto:biuro@pralma.pl',
    label: 'biuro@pralma.pl',
    src: 'contact_email',
    alt: 'email',
    width: '64',
    height: '45',
  },
  {
    to: 'tel:413453856',
    label: '+48 41 345 38 56',
    src: 'contact_phone',
    alt: 'telefon',
    width: '64',
    height: '64',
  },
  {
    to: 'tel:413450561',
    label: '+48 41 345 05 61',
    src: 'contact_fax',
    alt: 'faks',
    width: '64',
    height: '64',
  },
  {
    to: 'tel:602191607',
    label: '602 191 607',
    src: 'contact_mobile',
    alt: 'komórka',
    width: '41',
    height: '64',
  },
];

function ContactBar() {
  return (
    <React.Fragment>
      <section className={styles.contactBar}>
        {contactData.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </section>
    </React.Fragment>
  );
}

export default ContactBar;
