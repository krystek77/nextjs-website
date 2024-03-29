import React from 'react';
import ScrollButton from '../ScrollButton/ScrollButton';
import Hero from '../../containers/Hero/Hero';
import ContactBar from '../../containers/ContactBar/ContactBar';
import InnovationLogos from '../../containers/InnovationLogos/InnovationLogos';
import Footer from '../../containers/Footer/Footer';
import Topbar from '../../containers/Topbar/Topbar';
import styles from './HomeLayout.module.css';

function HomeLayout({ children }) {
  return (
    <React.Fragment>
      <ScrollButton down />
      <ScrollButton up />
      <Topbar />
      <Hero />
      <InnovationLogos />
      <ContactBar />
      {children}
      <InnovationLogos />
      <ContactBar />
      <Footer />
    </React.Fragment>
  );
}

export default HomeLayout;
