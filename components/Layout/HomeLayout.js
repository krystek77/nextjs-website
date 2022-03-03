import React from 'react';
import Hero from '../../containers/Hero/Hero';
import ContactBar from '../../containers/ContactBar/ContactBar';
import InnovationLogos from '../../containers/InnovationLogos/InnovationLogos';
import styles from './HomeLayout.module.css';

function HomeLayout({ children }) {
  return (
    <React.Fragment>
      <Hero />
      <InnovationLogos/>
      <ContactBar />
      {children}
    </React.Fragment>
  );
}

export default HomeLayout;
