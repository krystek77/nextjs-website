import React from 'react';
import ScrollButton from '../ScrollButton/ScrollButton';
import ContactBar from '../../containers/ContactBar/ContactBar';
import Footer from '../../containers/Footer/Footer';
import InnovationLogos from '../../containers/InnovationLogos/InnovationLogos';
import Topbar from '../../containers/Topbar/Topbar';
import styles from './PageLayout.module.css';

function PageLayout({ children }) {
  return (
    <React.Fragment>
      <ScrollButton down />
      <ScrollButton up />
      <Topbar />
      <React.Fragment>{children}</React.Fragment>
      <InnovationLogos />
      <ContactBar />
      <Footer />
    </React.Fragment>
  );
}

export default PageLayout;
