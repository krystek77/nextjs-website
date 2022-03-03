import styles from './Layout.module.css';
import Topbar from '../../containers/Topbar/Topbar';
import ContactBar from '../../containers/ContactBar/ContactBar';
import Footer from '../../containers/Footer/Footer';
import React from 'react';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Topbar />
      <React.Fragment>{children}</React.Fragment>
      <ContactBar />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
