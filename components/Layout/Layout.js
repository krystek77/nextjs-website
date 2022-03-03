import React from 'react';
import Topbar from '../../containers/Topbar/Topbar';
import ContactBar from '../../containers/ContactBar/ContactBar';
import Footer from '../../containers/Footer/Footer';
import ScrollButton from '../ScrollButton/ScrollButton';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <React.Fragment>
      <ScrollButton down/>
      <ScrollButton up/>
      <Topbar />
      <React.Fragment>{children}</React.Fragment>
      <ContactBar />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
