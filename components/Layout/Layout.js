import styles from './Layout.module.css';
import Topbar from '../../containers/Topbar/Topbar';
import Footer from '../../containers/Footer/Footer';
import React from 'react';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Topbar />
      <React.Fragment>{children}</React.Fragment>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
